# System Architecture

NyayAI follows a modular, service-oriented architecture that separates legal data, AI reasoning, and application logic.

## High-Level Components
Frontend: React + TypeScript
Backend: FastAPI (Python)
AI Layer: OpenAI GPT-4 + LangChain
Database: PostgreSQL + pgVector
Cache: Redis

Authoritative legal data is always separated from AI reasoning.
