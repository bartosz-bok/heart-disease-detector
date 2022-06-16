from typing import Union
from enum import Enum
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


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