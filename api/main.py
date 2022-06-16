# main.py
from fastapi import FastAPI
app = FastAPI()

probability = 0.5

probability_str = str(probability)

@app.get("/")
def hello():
    return {"number":probability_str}