# 🏠 HouSetimation - Prédiction de prix immobiliers

HouSetimation est une application **full-stack** qui permet d’estimer la valeur d’une maison en Californie à partir de caractéristiques simples (revenu médian, nombre de pièces, latitude, longitude, etc.).  
Elle combine **un modèle IA (scikit-learn)** déployé avec **FastAPI** et une interface utilisateur moderne avec **Next.js + TailwindCSS**.

---

## ✨ Fonctionnalités

- 📊 **Prédiction instantanée** du prix d’une maison grâce à un modèle de Machine Learning.  
- 🧮 **Normalisation des données** avec `StandardScaler`.  
- ⚡ **Backend FastAPI** exposant une route `/predict`.  
- 🎨 **Frontend Next.js** avec une UI moderne (modale, transitions, dark mode).  
- 🌐 **Communication API** sécurisée avec gestion du CORS.  
- 💲 Résultats affichés en **millions de dollars (M$)** avec 2 décimales.

---

## 🛠️ Technologies utilisées

### Frontend
- [Next.js](https://nextjs.org/) (React + TypeScript)
- [TailwindCSS](https://tailwindcss.com/) (UI design)
- [Framer Motion](https://www.framer.com/motion/) (animations)
- [shadcn/ui](https://ui.shadcn.com/) (composants)

### Backend
- [FastAPI](https://fastapi.tiangolo.com/) (framework Python)
- [scikit-learn](https://scikit-learn.org/) (modèle ML)
- [joblib](https://joblib.readthedocs.io/) (sérialisation du modèle)
- [uvicorn](https://www.uvicorn.org/) (serveur ASGI)

---

## ⚙️ Installation et lancement

### 1. Cloner le projet
```bash
git clone https://github.com/ton-user/ton-repo.git
cd ton-repo
