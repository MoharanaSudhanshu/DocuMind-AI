from app.services.embedding_service import EmbeddingService

service = EmbeddingService()

vector = service.embed_text(
    "Artificial Intelligence is changing healthcare."
)

print(type(vector))

print()

print(len(vector))

print()

print(vector[:10])