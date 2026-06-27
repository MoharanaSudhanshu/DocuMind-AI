from google import genai
from app.core.config import settings


class EmbeddingService:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    def embed_text(self, text: str) -> list[float]:

        query = (
            "Represent this sentence for searching relevant passages: "
            + text
        )

        response = self.client.models.embed_content(
            model="gemini-embedding-001",
            contents=query,
        )

        return response.embeddings[0].values

    def embed_documents(
        self,
        texts: list[str],
    ) -> list[list[float]]:

        embeddings = []

        for text in texts:
            response = self.client.models.embed_content(
                model="gemini-embedding-001",
                contents=text,
            )

            embeddings.append(
                response.embeddings[0].values
            )

        return embeddings
