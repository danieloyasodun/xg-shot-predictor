# 🔧 Project Scaffold – xG Shot Predictor Web App

This guide outlines the folder structure and includes starter code snippets to help you quickly build and run your xG predictor project.

---

## 📁 Folder Structure

```
xg-shot-predictor/
├── backend/
│   ├── app/
│   │   ├── main.py             # FastAPI app w/ xG prediction endpoint
│   │   ├── model.py            # Load and use the trained model
│   │   ├── utils.py            # Helper functions (e.g., feature engineering)
│   │   └── requirements.txt    # Python dependencies
│   └── model/
│       └── xg_model.pkl        # Trained ML model
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   └── PitchCanvas.tsx  # Interactive pitch using Konva or D3
│   │   ├── App.tsx              # Main app logic (xG call + UI)
│   │   ├── api.ts               # Axios/fetch to FastAPI backend
│   │   └── index.tsx
│   └── package.json
│
├── README.md                   # Project overview
├── .gitignore
└── .env                        # For secrets / URLs
```

---

## 🧠 Backend – FastAPI + ML Model

### `/backend/app/main.py`

```python
from fastapi import FastAPI
from pydantic import BaseModel
from model import predict_xg

app = FastAPI()

class ShotRequest(BaseModel):
    x: float
    y: float
    is_header: bool = False
    assist_type: str = "through_ball"

@app.post("/predict-xg")
def get_xg(shot: ShotRequest):
    xg = predict_xg(shot)
    return {"xG": xg}
```

---

### `/backend/app/model.py`

```python
import joblib
import numpy as np

model = joblib.load("model/xg_model.pkl")

def predict_xg(shot):
    features = np.array([[shot.x, shot.y, int(shot.is_header)]])  # Expand if needed
    return round(float(model.predict_proba(features)[0][1]), 3)
```

---

## 🌐 Frontend – React + Konva

### `/frontend/src/api.ts`

```ts
import axios from "axios";

export const getXG = async (x: number, y: number, isHeader = false) => {
  const res = await axios.post("http://localhost:8000/predict-xg", {
    x,
    y,
    is_header: isHeader,
  });
  return res.data.xG;
};
```

---

### `/frontend/src/components/PitchCanvas.tsx`

```tsx
import React from "react";
import { Stage, Layer, Rect } from "react-konva";

const PitchCanvas = ({ onShot }: { onShot: (x: number, y: number) => void }) => {
  return (
    <Stage width={800} height={500} onClick={(e) => {
      const stage = e.target.getStage();
      const pointer = stage?.getPointerPosition();
      if (pointer) onShot(pointer.x, pointer.y);
    }}>
      <Layer>
        <Rect width={800} height={500} fill="green" />
        {/* Optional: add pitch lines here */}
      </Layer>
    </Stage>
  );
};

export default PitchCanvas;
```

---

## 🚀 Running the App Locally

### Backend (Python/FastAPI)

```bash
cd backend
pip install -r app/requirements.txt
uvicorn app.main:app --reload
```

### Frontend (React)

```bash
cd frontend
npm install
npm run dev
```

---

## ✅ Next Steps

- [ ] Train and export your xG model to `/backend/model/xg_model.pkl`
- [ ] Expand input features (distance, angle, assist type, etc.)
- [ ] Add more interactivity to the pitch (shot types, heatmap view)
- [ ] Deploy backend with AWS Lambda or EC2
- [ ] Deploy frontend with Netlify, Vercel, or S3 + CloudFront

---

## 🌍 Optional Extensions

- Save user interaction data to AWS S3
- Add persistent database (PostgreSQL, DynamoDB) for stats history
- Embed AWS QuickSight for deeper analytics visualizations
- Gamify: users try to take the “perfect” xG shot
