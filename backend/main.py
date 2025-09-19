from fastapi import FastAPI
from pydantic import BaseModel
import joblib
import numpy as np
from fastapi.middleware.cors import CORSMiddleware

# Charger le modèle
model = joblib.load("house_price_model.pkl")
scaler = joblib.load("scaler.pkl")

# Créer app FastAPI
app = FastAPI(title="California Housing Predictor")

# Autoriser les origines (localhost:3000 pour ton Next.js)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # ou ["*"] pour tout autoriser
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Définition du schéma d’entrée (les données que ton front enverra)
class HouseData(BaseModel):
    MedInc: float
    AveRooms: float
    AveOccup: float
    Latitude: float
    Longitude: float

@app.get("/")
def root():
    return {"message": "API de prédiction de valeur des maisons 🚀"}


@app.post("/predict")
def predict(data: HouseData):
    # Transformer les données en numpy array
    X = np.array([[data.MedInc, data.AveRooms, data.AveOccup, data.Latitude, data.Longitude]])

    # Appliquer le scaler (si tu en as utilisé un)
    X_scaled = scaler.transform(X)

    # Faire la prédiction
    prediction = model.predict(X_scaled)

    return {"prediction": float(prediction[0])}
