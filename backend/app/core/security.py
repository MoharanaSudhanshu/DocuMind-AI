import secrets


def generate_secret(length: int = 32) -> str:
    return secrets.token_hex(length)