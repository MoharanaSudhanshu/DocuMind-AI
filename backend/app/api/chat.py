from fastapi import APIRouter

from app.schemas.chat import ChatRequest, ChatResponse
from app.services.chat_service import ChatService
from app.services.prompt_builder import PromptBuilder
from app.services.retrieval_service import RetrievalService

router = APIRouter()

retriever = RetrievalService()
chat_service = ChatService()


@router.post("/", response_model=ChatResponse)
def chat(request: ChatRequest):

    context = retriever.retrieve(request.question)

    prompt = PromptBuilder.build(
        request.question,
        context,
    )

    answer = chat_service.generate_answer(prompt)

    return ChatResponse(answer=answer)