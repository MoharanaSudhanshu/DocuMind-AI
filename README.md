# 📄 DocuMind AI

> **An AI-powered PDF Research Assistant built with Next.js, FastAPI, Gemini, PostgreSQL, and Retrieval-Augmented Generation (RAG).**

DocuMind AI enables users to upload PDF documents, ask natural language questions, and receive context-aware answers backed by page-level citations. It combines semantic search, vector embeddings, and Large Language Models (LLMs) to transform static PDFs into an interactive knowledge base.

---

## 🚀 Features

* 📂 Upload and manage PDF documents
* 🤖 AI-powered conversational chat
* 🔍 Semantic search using vector embeddings
* 📖 Page-level source citations
* 🧠 Retrieval-Augmented Generation (RAG)
* 📄 Built-in PDF preview with zoom and page navigation
* 💬 Markdown support for AI responses
* 📊 Storage usage dashboard
* 🎨 Modern responsive UI
* ⚡ FastAPI backend with PostgreSQL + pgvector

---

## 🖼️ Preview

### Landing Page

* Modern SaaS-inspired interface
* Hero section
* Feature showcase
* Call-to-action
* Responsive navigation

### Dashboard

* Sidebar with uploaded documents
* AI chat interface
* Interactive PDF viewer
* Document search
* Upload modal

---

## 🏗️ System Architecture

```text
                 User
                   │
                   ▼
         Next.js Frontend (React)
                   │
        REST API (Axios)
                   │
                   ▼
          FastAPI Backend
                   │
       PDF Text Extraction
                   │
             Text Chunking
                   │
      Gemini Embedding Model
                   │
          PostgreSQL + pgvector
                   │
         Semantic Similarity Search
                   │
            Prompt Construction
                   │
          Gemini Large Language Model
                   │
                   ▼
      AI Response with Citations
```

---

## 🛠️ Tech Stack

### Frontend

* Next.js 16
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* Zustand
* React PDF
* React Markdown
* Lucide React

### Backend

* FastAPI
* Python
* SQLAlchemy
* PostgreSQL
* pgvector
* LangChain

### AI

* Google Gemini
* Gemini Embeddings
* Retrieval-Augmented Generation (RAG)
* Semantic Search
* Prompt Engineering

---

## 📁 Project Structure

```text
DocuMind-AI
│
├── frontend
│   ├── app
│   ├── components
│   ├── hooks
│   ├── lib
│   ├── services
│   ├── store
│   └── types
│
├── backend
│   ├── app
│   │   ├── api
│   │   ├── repositories
│   │   ├── services
│   │   ├── models
│   │   ├── core
│   │   └── utils
│   │
│   └── uploads
│
├── docs
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/yourusername/DocuMind-AI.git
cd DocuMind-AI
```

---

### Backend

```bash
cd backend

python -m venv venv

source venv/bin/activate
# Windows
venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Backend runs at

```text
http://127.0.0.1:8000
```

---

### Frontend

```bash
cd frontend

npm install

npm run dev
```

Frontend runs at

```text
http://localhost:3000
```

---

## 🔑 Environment Variables

### Backend

Create a `.env` file inside the backend folder.

```env
GEMINI_API_KEY=YOUR_GEMINI_API_KEY

DATABASE_URL=postgresql://username:password@localhost:5432/documind

PROJECT_NAME=DocuMind AI
```

---

### Frontend

Create a `.env.local` file.

```env
NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000
```

---

## 📡 API Endpoints

| Method | Endpoint              | Description         |
| ------ | --------------------- | ------------------- |
| GET    | `/api/health`         | Health check        |
| POST   | `/api/ingest`         | Upload PDF          |
| GET    | `/api/documents`      | Fetch documents     |
| DELETE | `/api/documents/{id}` | Delete document     |
| POST   | `/api/chat`           | AI chat             |
| POST   | `/api/chat/stream`    | Streaming responses |

---

## 💡 Workflow

1. Upload one or more PDF documents.
2. Text is extracted and split into chunks.
3. Embeddings are generated using Gemini.
4. Embeddings are stored in PostgreSQL with pgvector.
5. User submits a question.
6. Relevant chunks are retrieved through semantic search.
7. Context is sent to the Gemini LLM.
8. AI returns a grounded answer with citations.
9. The PDF viewer displays the referenced document.

---

## 📌 Current Features

* PDF Upload
* AI Chat
* PDF Preview
* Semantic Search
* Source Citations
* Document Management
* Responsive Dashboard
* Storage Statistics

---

## 🚧 Future Improvements

* User Authentication
* Google Login
* OCR Support
* DOCX Support
* Image-based Search
* Voice Input
* Multi-user Workspaces
* Chat History
* AI-generated Notes
* Export Conversations
* Cloud Deployment
* Team Collaboration

---

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/new-feature
```

3. Commit your changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Sudhanshu Sekhar Moharana**

B.Tech Computer Science & Engineering
Sambalpur University Institute of Information Technology (SUIIT)

---

## ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.
