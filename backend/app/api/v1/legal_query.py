from fastapi import APIRouter
from app.schemas.legal_query import LegalQueryRequest, LegalQueryResponse
from app.services.ai.langchain_chains import run_chain
from app.services.legal.disclaimer import DISCLAIMER

router = APIRouter()

@router.post("/legal-query", response_model=LegalQueryResponse)
def legal_query(payload: LegalQueryRequest):
    result = run_chain(payload.question)
    result["disclaimer"] = DISCLAIMER
    return result
