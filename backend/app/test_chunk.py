from pathlib import Path

from app.services.pdf_service import PDFService
from app.services.chunk_service import ChunkService

BASE_DIR = Path(__file__).resolve().parent.parent

pdf = BASE_DIR / "test_files" /"AI.pdf"

docs = PDFService.load_pdf(str(pdf))

chunks = ChunkService().split_documents(docs)

print(f"Pages  : {len(docs)}")
print(f"Chunks : {len(chunks)}")

print()

print(chunks[0].metadata)

print()

print(chunks[0].page_content[:400])