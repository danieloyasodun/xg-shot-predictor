# ⚽ xG Shot Predictor Web App (Next.js)

## 🚀 Project Overview  
A fully interactive web app built with **Next.js** that displays a football pitch where users can click to simulate a shot. Based on the clicked position, it returns the **expected goals (xG)** value using a trained machine learning model.

---

## 🧠 Workflow Overview

### 1. Data Collection & Model Training
- **Source data**: Use public datasets like Understat, FBref, or Kaggle.
- **Preprocessing**:
  - Extract key shot features: coordinates, angle, distance, body part, etc.
- **Feature Engineering**:
  - Calculate shot angle and distance.
  - Encode categorical features.
- **Modeling**:
  - Train a model (Logistic Regression, Random Forest, or XGBoost).
  - Save as `model.pkl`.

---

### 2. Backend (API)
- **Framework**: FastAPI
- **Endpoints**:
  - `POST /predict`: Accepts shot input, returns xG prediction.
- **Setup**:
  - Load model (`model.pkl`) on startup.
- **Deployment Options**:
  - Local: FastAPI with Uvicorn.
  - Production: AWS Lambda (via Mangum) or Dockerized EC2.

---

### 3. Frontend (UI with Next.js)
- **Framework**: Next.js (React-based)
- **Rendering**: Use `Canvas` (via Konva.js) or `SVG` (via D3.js) for pitch.
- **Core Components**:
  - `Pitch`: full-field clickable area.
  - `ShotForm`: optional dropdowns (shot type, body part).
  - `ResultBox`: displays xG value after prediction.
- **API Integration**:
  - Call FastAPI `/predict` endpoint via `fetch()` or Axios.
- **Enhancements**:
  - Add animations, tooltips, or shot trails.

---

### 4. Hosting & Deployment
- **Frontend**: Deployed via **Vercel** (ideal for Next.js).
- **Backend**:
  - Lightweight: AWS Lambda + API Gateway.
  - Heavier: EC2 with Docker or Fly.io.
- **ML Model**:
  - Can be embedded in backend or hosted on AWS SageMaker (optional).

---

## 🛠 Tech Stack

| Layer     | Tools                                |
|-----------|--------------------------------------|
| Frontend  | **Next.js**, D3.js or Konva.js, TailwindCSS |
| Backend   | **FastAPI**, Python, Uvicorn          |
| ML Model  | Scikit-learn, XGBoost, Pandas        |
| Hosting   | Vercel, AWS Lambda, EC2              |
| Data      | Understat, FBref, Kaggle             |

---

## ✨ Bonus Features
- Display historical shots similar to clicked location.
- Simulate and visualize multiple shots (aggregate xG heatmaps).
- User login with saved shot history.
- Fully mobile responsive + smooth animations.

---

## 📁 Suggested Project Structure

```
/xg-shot-predictor
│
├── frontend/ (Next.js App)
│   ├── pages/index.tsx
│   ├── components/Pitch.tsx
│   └── styles/
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

- [ ] Collect and preprocess shot data  
- [ ] Train and save xG model  
- [ ] Build FastAPI backend with `/predict`  
- [ ] Build pitch interaction in Next.js  
- [ ] Connect frontend ↔ backend  
- [ ] Deploy backend (Lambda/EC2) and frontend (Vercel)  
- [ ] Final UI polish + deploy
