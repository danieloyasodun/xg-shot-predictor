# xG Shot Predictor Web App

An interactive football pitch dashboard where users can click on any location to get the **expected goal (xG)** value of a shot from that spot. Combines real-world soccer data with machine learning and interactive web design.

---

## Project Overview

**Goal:**  
Create a web app that simulates shot-taking by allowing users to click on a football pitch and receive an xG prediction for a shot from that position.

**Use Case:**  
Used by fans, analysts, or scouts to understand shot quality from different areas of the pitch.

---

## Features

- Interactive football pitch built with React and D3.js
- Real-time xG predictions via ML model trained on real shot data
- Customization options for shot type (foot/header), assist type, etc.
- Backend API to serve predictions
- Fully deployable with AWS (Lambda, S3, API Gateway)

---

## Tech Stack

### Frontend:
- React
- D3.js or Konva.js (for pitch visualization)
- Tailwind CSS or Styled Components

### Backend:
- FastAPI or Flask
- Python ML libraries: pandas, scikit-learn, XGBoost
- AWS Lambda + API Gateway (for serverless deployment)
- S3 (optional: store logs or usage data)

---

## Workflow & Milestones

### Phase 1: Data & Model
- [ ] Scrape or download shot-level soccer data (Understat, FBref, Kaggle)
- [ ] Clean and preprocess data
- [ ] Engineer features:
  - Shot distance
  - Angle
  - Shot type (foot/header)
  - Match context (optional)
- [ ] Train and evaluate ML model (start with Logistic Regression, upgrade to XGBoost)
- [ ] Save model (`.pkl` or `.joblib`) for serving

### Phase 2: Backend API
- [ ] Build FastAPI/Flask app with endpoint `/predict-xg`
- [ ] Load saved model and return prediction based on input coordinates + metadata
- [ ] Test locally with sample frontend request
- [ ] Optional: Deploy on AWS Lambda or EC2 with API Gateway

### Phase 3: Frontend UI
- [ ] Create a static football pitch using D3.js or Konva.js
- [ ] Capture click events and translate to pitch coordinates
- [ ] Send POST request to backend with click data
- [ ] Display xG result as popup, tooltip, or overlay
- [ ] Add UI for adjusting shot type / assist type

### Phase 4: Extras / Polish
- [ ] Add visual history of user shots + average xG
- [ ] Mobile responsive layout
- [ ] Save user shot interactions to S3 or database (analytics)
- [ ] Optionally embed QuickSight visualizations (for AWS bonus)

---

## Example API Request

```json
POST /predict-xg
{
  "x": 78.2,
  "y": 42.1,
  "is_header": false,
  "assist_type": "through_ball"
}
