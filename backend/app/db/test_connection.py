from app.db.supabase import supabase

response = supabase.table("documents").select("*").execute()

print(response)