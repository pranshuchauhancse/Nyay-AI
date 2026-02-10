from fastapi import APIRouter
from app.api.v1 import (
    legal_query, statutes, cases,
    documents, lawyers, users, subscriptions
)

api_router = APIRouter(prefix="/api/v1")

api_router.include_router(legal_query.router)
api_router.include_router(statutes.router)
api_router.include_router(cases.router)
api_router.include_router(documents.router)
api_router.include_router(lawyers.router)
api_router.include_router(users.router)
api_router.include_router(subscriptions.router)
