# main.py
from fastapi import FastAPI, Request
app = FastAPI()

probability = 0.5

probability_str = str(probability)

@app.get("/items/{item_id}")
def read_root(item_id: str, request: Request):
    client_host = request.client.host
    return {"client_host": client_host, "item_id": item_id}

@app.get("/")
def hello():
    return {"number":probability_str}