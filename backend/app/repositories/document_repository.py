from typing import Any
from urllib import response

from app.db.supabase import supabase


class DocumentRepository:
    def create_document(self, filename: str):
        response = (
            supabase.table("documents")
            .insert(
                {
                    "filename": filename,
                }
            )
            .execute()
        )

        return response.data[0]["id"]

    def insert_chunks(self, rows: list[dict[str, Any]]):
        print("Inserting", len(rows), "chunks")

        response = (
            supabase.table("chunks")
            .insert(rows)
            .execute()
        )

        print("Insert response:", response)

        return response

    def similarity_search(
        self,
        embedding: list[float],
        top_k: int = 5,
    ):
        response = (
            supabase.rpc(
                "match_documents",
                {
                    "query_embedding": embedding,
                    "match_count": top_k,
                },
            )
            .execute()
        )

        return response.data

    def list_documents(self):
        return (
            supabase.table("documents")
            .select("*")
            .order("uploaded_at", desc=True)
            .execute()
            .data
        )

    def delete_document(self, document_id: str):
        return (
            supabase.table("documents")
            .delete()
            .eq("id", document_id)
            .execute()
        )