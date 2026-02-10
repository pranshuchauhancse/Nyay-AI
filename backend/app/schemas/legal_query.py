from pydantic import BaseModel

class LegalQueryRequest(BaseModel):
    question: str

class LegalQueryResponse(BaseModel):
    summary: str
    acts: list
    sections: list
    steps: list
    disclaimer: str
