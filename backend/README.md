# Backend

## Purpose:
This folder contains the backend services for the **XG Shot Predictor** web application. The backend is responsible for serving API endpoints to fetch data (like xG predictions), process user requests, and handle any necessary computations (such as calculating the xG of a shot based on the clicked point).

## Tech Stack:
- **Node.js / Express**: For setting up the server and API endpoints.
- **Database**: (e.g., PostgreSQL, MongoDB, or Supabase) for storing data such as xG statistics, player data, and match details.
- **AWS Lambda / S3 / EC2 (Optional)**: For serverless or scalable hosting, or file storage.

## Key Features:
- **API Endpoints**: Provide data to the frontend (e.g., xG prediction for a given shot).
- **Data Processing**: Perform calculations based on the input data (like shot location) and provide xG predictions.
- **Database Integration**: Store match and player data for analytics and historical reference.

## How to Run:
1. Navigate to the `backend` folder:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the server:
    ```bash
    npm run dev
    ```
4. The server should be running at `http://localhost:5000` (or another port, depending on configuration).

## Files and Folders:
- `server.js`: Main server entry point.
- `routes/`: Contains the API route handlers.
- `models/`: Contains the database models and schema.
- `controllers/`: Contains the logic for handling requests and responses.
- `package.json`: Contains backend project dependencies and scripts.
