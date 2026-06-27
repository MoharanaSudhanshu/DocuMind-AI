export async function uploadDocument(file: File) {
  const form = new FormData();

  form.append("file", file);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/ingest`,
    {
      method: "POST",
      body: form,
    },
  );

  return response.json();
}
