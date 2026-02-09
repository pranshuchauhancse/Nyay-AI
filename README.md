# NyayAI ⚖️

**AI-Powered Legal Information Platform for India**

NyayAI is an AI-based LegalTech platform designed to help individuals understand legal issues in the context of Indian law. It provides instant legal **information** by mapping user queries to relevant statutes, sections, and case references, while clearly stating that it does **not** replace professional legal advice.

---

## 🚩 Problem Statement

Accessing basic legal information in India is:

* Time-consuming
* Expensive
* Difficult for non-lawyers
* Overwhelming due to complex legal language

Most people only need **initial clarity**, not immediate legal representation.

---

## 💡 Solution

NyayAI uses AI to:

* Interpret legal questions in plain English
* Map issues to relevant Indian laws (IPC, CrPC, CPC, Contract Act, TPA)
* Reference important sections and case precedents
* Generate basic legal documents (e.g., legal notices)
* Guide users on next steps

---

## ⚙️ Key Features

* AI-powered legal Q&A
* Indian statute & section mapping
* Case law references using semantic search (pgVector)
* Legal document generation
* Freemium access model (Free / Pro / Premium)
* Lawyer consultation (mock for MVP)

---

## 🏗️ Architecture Overview

* **Backend:** FastAPI (Python)
* **AI Layer:** OpenAI GPT-4 + LangChain
* **Database:** PostgreSQL + pgVector
* **Cache & Rate Limiting:** Redis
* **Frontend:** React + TypeScript
* **Deployment:** Docker, Nginx

The system separates **authoritative legal data** (statutes & cases) from **AI reasoning**, ensuring better accuracy and auditability.

---

## 🧠 How It Works

1. User submits a legal query
2. Relevant statutes and cases are retrieved
3. AI generates a structured explanation using only retrieved data
4. User receives a clear response with disclaimers

---

## 📁 Project Structure

```
backend/        # FastAPI backend & AI logic
frontend/       # React + TypeScript UI
docs/           # Architecture & ethics docs
infrastructure/ # Docker & deployment configs
scripts/        # Data seeding scripts
```

---

## ⚠️ Legal Disclaimer

NyayAI provides **legal information only**, not legal advice.
Responses may be incomplete or outdated. Users should consult a qualified advocate before taking any legal action.

---

## 🚀 Future Scope

* Expand law database (IT Act, GST, Companies Act)
* Verified lawyer onboarding
* Multilingual support
* Court-wise case filtering
* Compliance-grade legal audit logs
