from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

import os

from app.api.router import router
from app.core.config import settings

# ------------------------------------
# Create FastAPI App
# ------------------------------------

app = FastAPI(
    title=settings.PROJECT_NAME,
    version="1.0.0",
)

# ------------------------------------
# CORS
# ------------------------------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "https://your-frontend.vercel.app",  # Replace after deployment
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ------------------------------------
# Create uploads directory if missing
# ------------------------------------

UPLOAD_DIR = "uploads"

os.makedirs(UPLOAD_DIR, exist_ok=True)

# ------------------------------------
# Static Files
# ------------------------------------

app.mount(
    "/uploads",
    StaticFiles(directory=UPLOAD_DIR),
    name="uploads",
)

# ------------------------------------
# API Routes
# ------------------------------------

app.include_router(
    router,
    prefix="/api",
)

# ------------------------------------
# Root Endpoint
# ------------------------------------

@app.get("/")
async def root():
    return {
        "application": settings.PROJECT_NAME,
        "status": "running",
        "docs": "/docs",
    }

# ------------------------------------
# Health Check
# ------------------------------------

@app.get("/health")
async def health():
    return {
        "status": "healthy"
    }
