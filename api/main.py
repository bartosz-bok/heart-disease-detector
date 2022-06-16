from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from joblib import load
import pandas as pd



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

    bmi = item.bmi
    smoking = item.smoking
    alcohol = item.alcohol
    stroke = item.stroke
    physicalHealth = item.physicalHealth
    mentalHealth = item.mentalHealth
    diffWalking = item.diffWalking
    sex = item.sex
    age = item.age
    race = item.race
    diabetic = item.diabetic
    physicalActivity = item.physicalActivity
    genHealth = item.genHealth
    sleepTime = item.sleepTime
    asthma = item.asthma
    kidneyDisease = item.kidneyDisease
    skinCancer = item.skinCancer

    X = [bmi, smoking, alcohol, stroke, physicalHealth, mentalHealth, diffWalking, sex,
         age, race, diabetic, physicalActivity, genHealth, sleepTime, asthma, kidneyDisease, skinCancer]

    val_X = pd.DataFrame(X)
    val_X = val_X.values.reshape(1,-1)


    clf = load('model.joblib')

    print(pd.__version__)

    wynik = clf.predict_proba(val_X)
    wynik2 = int(wynik[0][1]*100)

    clf = load('model.joblib')

    return { "result": wynik2 }
