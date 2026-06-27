import json
from fastapi import APIRouter
from fastapi.responses import StreamingResponse

from app.schemas.chat import ChatRequest
from app.services.chat_service import ChatService
from app.services.prompt_builder import PromptBuilder
from app.services.retrieval_service import RetrievalService

router = APIRouter()

retriever = RetrievalService()
chat_service = ChatService()


@router.post("/")
async def stream_chat(request: ChatRequest):

    context = retriever.retrieve(request.question)

    prompt = PromptBuilder.build(
        request.question,
        context,
    )

    async def generate():

        # Send sources first
        yield json.dumps({
    "type": "sources",
    "data": context
}) + "\n"

        # Stream answer
        for chunk in chat_service.stream_answer(prompt):
            yield json.dumps({
    "type": "token",
    "data": chunk
}) + "\n"

        yield json.dumps({
    "type": "done"
}) + "\n"

    return StreamingResponse(
        generate(),
        media_type="application/x-ndjson",
    )