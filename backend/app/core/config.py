from pydantic import BaseSettings

class Settings(BaseSettings):
    OPENAI_API_KEY: str
    DATABASE_URL: str
    REDIS_URL: str
    JWT_SECRET: str

    class Config:
        env_file = ".env"

settings = Settings()
