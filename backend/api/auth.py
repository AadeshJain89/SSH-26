"""
JWT-based authentication: register and login.
"""
import uuid
from datetime import datetime, timedelta
from typing import Optional

import jwt
from fastapi import APIRouter, HTTPException
from passlib.context import CryptContext
from pydantic import BaseModel

from backend.data.store import add_user, get_user_by_username

router = APIRouter(prefix="/auth", tags=["auth"])
pwd_ctx = CryptContext(schemes=["bcrypt"], deprecated="auto")

# In production use env var
SECRET_KEY = "skill-gap-plat-secret-change-in-production"
ALGORITHM = "HS256"
ACCESS_EXPIRE_MINUTES = 60 * 24 * 7  # 7 days


class RegisterRequest(BaseModel):
    username: str
    password: str


class LoginRequest(BaseModel):
    username: str
    password: str


class TokenResponse(BaseModel):
    access_token: str
    token_type: str = "bearer"


def _hash(password: str) -> str:
    return pwd_ctx.hash(password)


def _verify(plain: str, hashed: str) -> bool:
    return pwd_ctx.verify(plain, hashed)


def _create_token(sub: str) -> str:
    expire = datetime.utcnow() + timedelta(minutes=ACCESS_EXPIRE_MINUTES)
    payload = {"sub": sub, "exp": expire}
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)


def decode_token(token: str) -> Optional[str]:
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        return payload.get("sub")
    except Exception:
        return None


@router.post("/register", response_model=TokenResponse)
def register(req: RegisterRequest):
    if not req.username or not req.password:
        raise HTTPException(status_code=400, detail="Username and password required")
    if get_user_by_username(req.username):
        raise HTTPException(status_code=400, detail="Username already taken")
    user_id = str(uuid.uuid4())
    add_user(user_id, req.username, _hash(req.password))
    return TokenResponse(access_token=_create_token(user_id))


@router.post("/login", response_model=TokenResponse)
def login(req: LoginRequest):
    if not req.username or not req.password:
        raise HTTPException(status_code=400, detail="Username and password required")
    found = get_user_by_username(req.username)
    if not found:
        raise HTTPException(status_code=401, detail="Invalid username or password")
    user_id, user = found
    if not _verify(req.password, user["password_hash"]):
        raise HTTPException(status_code=401, detail="Invalid username or password")
    return TokenResponse(access_token=_create_token(user_id))
