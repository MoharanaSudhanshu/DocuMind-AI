from pathlib import Path

from app.services.document_service import DocumentService

BASE_DIR = Path(__file__).resolve().parent.parent

pdf_path = BASE_DIR / "test_files" / "sample.pdf"

service = DocumentService()

chunks = service.ingest_pdf(str(pdf_path))

print(f"Inserted {chunks} chunks into Supabase.")