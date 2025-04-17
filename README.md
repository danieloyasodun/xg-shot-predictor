# xG Shot Predictor Web App

## 🚀 Project Overview
An interactive web application that displays a football pitch and allows users to click anywhere on the field to simulate a shot. Based on the clicked coordinates, the app returns the expected goals (xG) value of that shot using a machine learning model trained on historical shot data.

---

## 🧠 Workflow Overview

### 1. Data Collection & Model Training
- **Source data**: Use Understat, FBref, or other public datasets.
- **Clean and preprocess**:
  - Extract shot coordinates, distance, angle, body part, shot type, etc.
- **Feature engineering**:
  - Calculate shot angle, distance from goal.
  - Encode categorical variables.
- **Model training**:
  - Use Logistic Regression, Random Forest, or XGBoost.
  - Save trained model (`model.pkl`).

### 2. Backend (API)
- **Framework**: FastAPI (or Flask)
- **Endpoints**:
  - `/predict`: Accepts shot coordinates & metadata, returns xG.
- **Model loading**:
  - Load `model.pkl` and respond with prediction.
- **Deployment**:
  - Local demo: run FastAPI server.
  - Production: deploy via AWS Lambda or EC2.

### 3. Frontend (UI)
- **Framework**: React (with D3.js or Konva.js)
- **Components**:
  - Interactive football pitch (SVG or Canvas).
  - Capture click events to get `(x, y)`.
  - Optional: dropdowns for shot type, body part.
- **API call**:
  - POST to `/predict` with input data.
  - Display xG result on-screen.

### 4. Hosting & Deployment
- **Frontend**: Vercel, Netlify, or S3 Static Hosting.
- **Backend**: AWS Lambda + API Gateway or EC2 with Docker.
- **Model hosting**: AWS SageMaker (optional, for more advanced ML infra).

---

## 🛠 Tech Stack

| Layer     | Tools                               |
|-----------|-------------------------------------|
| Frontend  | React, D3.js or Konva.js, Tailwind  |
| Backend   | FastAPI, Python, Uvicorn             |
| ML Model  | Scikit-learn, XGBoost, Pandas       |
| Hosting   | AWS Lambda, API Gateway, S3, EC2    |
| Data      | Understat, FBref, Kaggle            |

---

## ✨ Bonus Features
- Show historical examples of shots from clicked area.
- Aggregate xG visualization (simulate multiple shots).
- User-auth + track shot history.
- Add mobile responsiveness and animations.

---

## 📁 Project Structure (suggested)
```
/xg-shot-predictor
│
├── frontend/
│   └── src/components/Pitch.jsx
│
├── backend/
│   ├── app/main.py
│   └── model/model.pkl
│
├── data/
│   └── raw_shot_data.csv
│
├── notebooks/
│   └── xg_model_training.ipynb
│
└── README.md
```

---

## ✅ Milestones

- [ ] Collect & clean shot data
- [ ] Train xG model and export
- [ ] Build backend API (FastAPI)
- [ ] Build interactive pitch (React)
- [ ] Connect frontend with backend
- [ ] Host frontend & backend
- [ ] Polish UI + deploy to resume
