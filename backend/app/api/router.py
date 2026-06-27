from fastapi import APIRouter
from app.api.chat import router as chat_router
from app.api.chat_stream import router as stream_router
from app.api.health import router as health_router
from app.api.ingest import router as ingest_router
from app.api.documents import router as documents_router

router = APIRouter()

router.include_router(
    health_router,
    prefix="/health",
    tags=["Health"],
)

router.include_router(
    ingest_router,
    prefix="/ingest",
    tags=["Ingest"],
)

router.include_router(
    chat_router,
    prefix="/chat",
    tags=["Chat"],
)

router.include_router(
    stream_router,
    prefix="/chat/stream",
    tags=["Streaming"],
)
router.include_router(
    documents_router,
    prefix="/documents",
    tags=["Documents"],
)

