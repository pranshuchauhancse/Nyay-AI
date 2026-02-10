from fastapi import APIRouter

router = APIRouter(prefix="/documents")

@router.post("/generate")
def generate_doc():
    return {"document": "Generated legal document"}
