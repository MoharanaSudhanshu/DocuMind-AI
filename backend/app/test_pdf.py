from pathlib import Path

from app.services.pdf_service import PDFService

BASE_DIR = Path(__file__).resolve().parent.parent

pdf_path = BASE_DIR / "test_files" / "AI.pdf"

docs = PDFService.load_pdf(str(pdf_path))

print(f"Pages: {len(docs)}")
print()
print(docs[0].metadata)
print()
print(docs[0].page_content[:500])