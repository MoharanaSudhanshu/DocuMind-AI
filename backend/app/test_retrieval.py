from app.services.retrieval_service import RetrievalService

service = RetrievalService()

results = service.retrieve(
    "What is Artificial Intelligence?"
)

print()

print(f"Retrieved {len(results)} chunks")

print()

for item in results:

    print("=" * 70)

    print("Similarity :", round(item["similarity"], 3))

    print("Filename   :", item["filename"])

    print("Page       :", item["page"])

    print()

    print(item["content"][:250])

    print()