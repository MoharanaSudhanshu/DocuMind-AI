from google import genai

from app.core.config import settings


class ChatService:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GOOGLE_API_KEY
        )

    def generate_answer(self, prompt: str):

        response = self.client.models.generate_content(
            model=settings.CHAT_MODEL,
            contents=prompt,
        )

        return response.text

    def stream_answer(self, prompt: str):

        stream = self.client.models.generate_content_stream(
            model=settings.CHAT_MODEL,
            contents=prompt,
        )

        for chunk in stream:
            if chunk.text:
                yield chunk.text