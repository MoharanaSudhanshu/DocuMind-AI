from app.services.prompt_builder import PromptBuilder
from app.services.retrieval_service import RetrievalService

retriever = RetrievalService()

context = retriever.retrieve(
    "What is Artificial Intelligence?"
)

prompt = PromptBuilder.build(
    "What is Artificial Intelligence?",
    context,
)

print(prompt)