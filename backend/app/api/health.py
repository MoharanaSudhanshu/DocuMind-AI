from fastapi import APIRouter

router = APIRouter()


@router.get("/")
async def health_check():

    return {
        "status": "healthy",
        "application": "DocuMind AI",
        "version": "1.0.0"
    }