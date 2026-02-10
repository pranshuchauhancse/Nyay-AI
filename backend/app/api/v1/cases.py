from fastapi import APIRouter

router = APIRouter(prefix="/cases")

@router.get("/")
def list_cases():
    return []
