from sentence_transformers import SentenceTransformer

from app.core.constants import EMBEDDING_MODEL


class EmbeddingService:
    """
    Handles local embedding generation using Hugging Face.
    """

    def __init__(self):
        self.model = SentenceTransformer(
            EMBEDDING_MODEL
        )

    def embed_text(self, text: str) -> list[float]:
        query = (
            "Represent this sentence for searching relevant passages: " + text
        )

        embedding = self.model.encode(
            query,
            normalize_embeddings=True,
        )

        return embedding.tolist()

    def embed_documents(
        self,
        texts: list[str]
    ) -> list[list[float]]:

        embeddings = self.model.encode(
            texts,
            normalize_embeddings=True,
        )

        return embeddings.tolist()