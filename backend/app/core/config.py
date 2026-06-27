from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):

    OPENAI_API_KEY: str

    SUPABASE_URL: str

    SUPABASE_SERVICE_ROLE_KEY: str

    PROJECT_NAME: str = "DocuMind AI"

    API_VERSION: str = "v1"
    GOOGLE_API_KEY: str
    CHAT_MODEL: str = "gemini-2.5-flash"
    CHAT_PROVIDER: str = "gemini"
    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore"
    )


settings = Settings()