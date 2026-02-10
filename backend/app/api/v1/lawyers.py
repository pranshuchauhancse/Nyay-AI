from fastapi import APIRouter

router = APIRouter(prefix="/lawyers")

@router.get("/")
def lawyers():
    return [{"name": "Adv. Sharma", "speciality": "Criminal Law"}]
