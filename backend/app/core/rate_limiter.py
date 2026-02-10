LIMITS = {
    "FREE": 5,
    "PRO": 50,
    "PREMIUM": 9999
}

def allowed(tier: str, used: int):
    return used < LIMITS.get(tier, 0)
