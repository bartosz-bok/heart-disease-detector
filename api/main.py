from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
#from joblib import load
#import pandas as pd

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

    if item.sex == 'Female':
        sex = 0
    elif item.sex == 'Male':
        sex = 1

    age = item.age

    if item.race == 'White':
        race = 4
    elif item.race == 'Asian':
        race = 3
    elif item.race == 'Hispanic':
        race = 2
    elif item.race == 'Other':
        race = 1
    elif item.race == 'Black':
        race = 0

    diabetic = item.diabetic
    physicalActivity = item.physicalActivity

    if item.genHealth == 'Excellent':
        genHealth = 4
    elif item.genHealth == 'Very Good':
        genHealth = 3
    elif item.genHealth == 'Good':
        genHealth = 2
    elif item.genHealth == 'Fair':
        genHealth = 1
    elif item.genHealth == 'Poor':
        genHealth = 0

    sleepTime = item.sleepTime
    asthma = item.asthma
    kidneyDisease = item.kidneyDisease
    skinCancer = item.skinCancer

    X = [bmi, smoking, alcohol, stroke, physicalHealth, mentalHealth, diffWalking, sex,
         age, race, diabetic, physicalActivity, genHealth, sleepTime, asthma, kidneyDisease, skinCancer]

    #val_X = pd.DataFrame(X)
    #val_X = val_X.values.reshape(1,-1)

    #clf = load('model.joblib')

    #wynik = clf.predict_proba(val_X)
    #wynik2 = int(wynik[0][1]*100)
    wynik2 = 2
    return { "result": wynik2 }
