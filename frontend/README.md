# Frontend

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Purpose:
This folder contains all the source code for the frontend of the **XG Shot Predictor** web application. It is built using **Next.js** and styled with **Tailwind CSS**. The frontend is responsible for displaying the dashboard, the football pitch, interactive shot locations, and the expected goals (xG) predictions.

## Key Features:
- **Interactive Dashboard**: Visual representation of the football pitch.
- **Shot Prediction**: Click on any point on the pitch to get the xG of a shot from that position.
- **Data Visualization**: Display xG data and other relevant statistics using charts and graphs.
- **User Interface**: Responsive, user-friendly design for easy navigation and interaction.

## How to Run:
1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Run the development server:
    ```bash
    npm start
    ```
4. Open your browser and navigate to `http://localhost:3000` to view the app.

## Files and Folders:
- `src/`: Contains the React components and JavaScript logic.
- `public/`: Contains the static files (like `index.html`).
- `tailwind.config.js`: Tailwind CSS configuration file.
- `package.json`: Contains project dependencies and scripts.


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
