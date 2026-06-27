from uuid import uuid4

from app.repositories.document_repository import DocumentRepository
from app.services.chunk_service import ChunkService
from app.services.embedding_service import EmbeddingService
from app.services.pdf_service import PDFService


class IngestService:
    """
    Handles the complete document ingestion pipeline.
    """

    def __init__(self):
        self.pdf_service = PDFService()
        self.chunk_service = ChunkService()
        self.embedding_service = EmbeddingService()
        self.repository = DocumentRepository()

    def ingest(self, pdf_path: str) -> int:
        """
        Ingest a PDF into the vector database.
        """

        

        pages = self.pdf_service.load_pdf(pdf_path)

        filename = pages[0].metadata["filename"]
        document_id = self.repository.create_document(filename)

        chunks = self.chunk_service.split_documents(pages)

        texts = [chunk.page_content for chunk in chunks]

        vectors = self.embedding_service.embed_documents(texts)

        rows = []

        for chunk, vector in zip(chunks, vectors):

            metadata = chunk.metadata.copy()

            metadata["document_id"] = document_id

            rows.append(
                {
                "document_id": document_id,
                "page": metadata["page"],
                "content": chunk.page_content,
                "metadata": metadata,
                "embedding": vector,
                }
            )

        self.repository.insert_chunks(rows)

        return len(rows)