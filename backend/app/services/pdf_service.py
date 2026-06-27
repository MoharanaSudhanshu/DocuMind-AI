from pathlib import Path

from langchain_community.document_loaders import PyPDFLoader
from langchain_core.documents import Document

from app.core.logger import get_logger

logger = get_logger(__name__)


class PDFService:
    """
    Service responsible for loading PDF files.
    Each page is returned as a LangChain Document.
    """

    @staticmethod
    def load_pdf(file_path: str) -> list[Document]:
        path = Path(file_path)

        if not path.exists():
            raise FileNotFoundError(f"PDF not found: {path}")

        loader = PyPDFLoader(str(path))
        documents = loader.load()

        logger.info(f"Loaded {len(documents)} pages from {path.name}")

        for index, doc in enumerate(documents):
            doc.metadata["filename"] = path.name
            doc.metadata["page"] = index + 1

        return documents