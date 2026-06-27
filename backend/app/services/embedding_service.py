from sentence_transformers import SentenceTransformer
from app.core.constants import EMBEDDING_MODEL

_model = None


class EmbeddingService:
    """
    Handles local embedding generation using Hugging Face.
    """

    def __init__(self):
        pass

    def get_model(self):
        global _model

        if _model is None:
            print("Loading embedding model...")
            _model = SentenceTransformer(EMBEDDING_MODEL)

        return _model

    def embed_text(self, text: str) -> list[float]:
        model = self.get_model()

        query = (
            "Represent this sentence for searching relevant passages: "
            + text
        )

        embedding = model.encode(
            query,
            normalize_embeddings=True,
        )

        return embedding.tolist()

    def embed_documents(
        self,
        texts: list[str],
    ) -> list[list[float]]:

        model = self.get_model()

        embeddings = model.encode(
            texts,
            normalize_embeddings=True,
        )

        return embeddings.tolist()
