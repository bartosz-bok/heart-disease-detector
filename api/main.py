from typing import Union
from enum import Enum
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

origins = [
    "http://localhost",
    "https://localhost",
    "http://localhost:8080",
    "https://localhost:8080",
    "http://localhost:3000",
    "https://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class Item(BaseModel):
    bmi: int
    smoking: bool
    alcohol: bool
    stroke: bool
    physicalHealth: int
    mentalHealth: int
    diffWalking: bool
    sex: str
    age: int
    race: str
    diabetic: bool
    physicalActivity: bool
    genHealth: str
    sleepTime: int
    asthma: bool
    kidneyDisease: bool
    skinCancer: bool

@app.post("/")
def response(item: Item):
    wynik = item.sleepTime * item.bmi
    return { "result": wynik }
