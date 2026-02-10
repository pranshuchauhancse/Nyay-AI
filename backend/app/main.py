from fastapi import FastAPI
from app.router import api_router

app = FastAPI(title="NyayAI")

app.include_router(api_router)

@app.get("/health")
def health():
    return {"status": "ok"}
