# main.py
from fastapi import FastAPI
app = FastAPI()

@app.get("/")
def hello():
    return {"message":"Siema zjeby, udało się!"}