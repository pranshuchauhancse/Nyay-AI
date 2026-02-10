from .openai_client import ask_llm
from .prompt_templates import LEGAL_PROMPT

def run_chain(question: str):
    text = ask_llm(LEGAL_PROMPT.format(question=question))
    return {
        "summary": text,
        "acts": [],
        "sections": [],
        "steps": []
    }
