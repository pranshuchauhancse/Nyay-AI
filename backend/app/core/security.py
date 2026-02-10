from jose import jwt

ALGORITHM = "HS256"

def create_token(data: dict, secret: str):
    return jwt.encode(data, secret, algorithm=ALGORITHM)
