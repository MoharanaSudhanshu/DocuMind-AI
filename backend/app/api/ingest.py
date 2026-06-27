import os

from fastapi import APIRouter, File, HTTPException, UploadFile

from app.schemas.ingest import IngestResponse
from app.services.ingest_service import IngestService

router = APIRouter()

UPLOAD_FOLDER = "uploads"
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

service = IngestService()


@router.post("/", response_model=IngestResponse)
async def upload_pdf(file: UploadFile = File(...)):

    if not file.filename.lower().endswith(".pdf"):
        raise HTTPException(
            status_code=400,
            detail="Only PDF files are supported.",
        )

    save_path = os.path.join(
        UPLOAD_FOLDER,
        file.filename,
    )

    with open(save_path, "wb") as f:
        f.write(await file.read())

    chunks = service.ingest(save_path)

    return IngestResponse(
        success=True,
        filename=file.filename,
        chunks=chunks,
    )