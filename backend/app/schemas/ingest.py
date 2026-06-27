from pydantic import BaseModel


class IngestResponse(BaseModel):

    success: bool

    filename: str

    chunks: int