from app.repositories.document_repository import DocumentRepository
from app.services.chunk_service import ChunkService
from app.services.embedding_service import EmbeddingService
from app.services.pdf_service import PDFService


class DocumentService:

    def __init__(self):
        self.pdf_service = PDFService()
        self.chunk_service = ChunkService()
        self.embedding_service = EmbeddingService()
        self.repository = DocumentRepository()

    def ingest_pdf(self, pdf_path: str) -> int:

        pages = self.pdf_service.load_pdf(pdf_path)

        chunks = self.chunk_service.split_documents(pages)

        texts = [chunk.page_content for chunk in chunks]

        vectors = self.embedding_service.embed_documents(texts)

        rows = []

        for chunk, vector in zip(chunks, vectors):
            rows.append(
                {
                    "content": chunk.page_content,
                    "metadata": chunk.metadata,
                    "filename": chunk.metadata.get("filename"),
                    "page": chunk.metadata.get("page"),
                    "chunk_number": chunk.metadata.get("chunk_number"),
                    "embedding": vector,
                }
            )

        self.repository.insert_documents(rows)

        return len(rows)