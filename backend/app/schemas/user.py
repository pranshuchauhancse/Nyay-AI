from pydantic import BaseModel

class UserSchema(BaseModel):
    tier: str
