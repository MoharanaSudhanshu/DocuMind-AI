from app.repositories.document_repository import DocumentRepository
from app.services.embedding_service import EmbeddingService


class RetrievalService:

    def __init__(self):
        self.embedding_service = EmbeddingService()
        self.repository = DocumentRepository()

    def retrieve(
        self,
        question: str,
        top_k: int = 5,
    ):
        query_embedding = self.embedding_service.embed_text(question)

        documents = self.repository.similarity_search(
            embedding=query_embedding,
            top_k=top_k,
        )
        print("\n===== Retrieved =====")

        for doc in documents:
            print(f"Similarity: {doc['similarity']:.4f}")
            print(f"Page: {doc['page']}")
            print(doc["content"][:500])
            print("-" * 50)

        return documents
    