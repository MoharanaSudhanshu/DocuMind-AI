from fastapi import APIRouter

from app.repositories.document_repository import DocumentRepository

router = APIRouter()

repository = DocumentRepository()


@router.get("/")
def list_documents():
    return repository.list_documents()


@router.delete("/{document_id}")
def delete_document(document_id: str):
    repository.delete_document(document_id)

    return {
        "success": True,
    }