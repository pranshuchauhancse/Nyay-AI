# API Specification

POST /api/v1/legal-query
Request:
{
  "question": "What is IPC 420?"
}

Response:
{
  "summary": "...",
  "acts": ["IPC"],
  "sections": ["420"],
  "steps": [],
  "disclaimer": "Not legal advice"
}
