from app.repositories.document_repository import DocumentRepository

repo = DocumentRepository()

documents = repo.get_all_documents()

print(documents.data)