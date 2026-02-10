from fastapi import APIRouter

router = APIRouter(prefix="/statutes")

@router.get("/")
def list_statutes():
    return ["IPC", "CrPC", "CPC", "Contract Act"]
