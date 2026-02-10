from fastapi import APIRouter

router = APIRouter(prefix="/subscriptions")

@router.get("/plans")
def plans():
    return ["FREE", "PRO", "PREMIUM"]
