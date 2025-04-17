# 🎯 Frontend - XG Shot Predictor (Next.js)

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## 📌 Purpose

This folder contains the complete **frontend** codebase for the **xG Shot Predictor** web application. Built with **Next.js** and styled using **Tailwind CSS**, it allows users to interact with a football pitch, simulate shots, and visualize xG predictions.

---

## 🔑 Key Features

- 🎯 **Interactive Pitch**: Clickable pitch interface built with SVG or Canvas (D3.js or Konva.js).
- 📈 **xG Visualization**: Instant expected goal prediction from the backend API.
- 📊 **Statistical Display**: Optional charts or historical xG overlays.
- 💻 **Modern UI**: Fully responsive and intuitive design with Tailwind CSS.
- 🔌 **API Integration**: Connects to FastAPI backend for xG predictions.

---

## 🚀 Getting Started

1. Navigate to the `frontend` folder:
    ```bash
    cd frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
frontend/
├── app/                 # Next.js app directory
│   └── page.tsx         # Main landing page
├── components/          # Reusable React components (e.g. Pitch.tsx)
├── public/              # Static assets (images, icons)
├── styles/              # Tailwind or global styles
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project metadata and scripts
```

---

## 🧠 Notes

- The pitch is interactive—click events trigger backend predictions.
- The frontend expects an API endpoint `/predict` to return xG based on coordinates.
- Uses `fetch()` or Axios to communicate with the FastAPI backend.

---

## 🧵 Fonts & UI

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to optimize fonts, including [Geist](https://vercel.com/font), designed by Vercel.

---

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Konva.js](https://konvajs.org/) or [D3.js](https://d3js.org/) for graphics
- [FastAPI Docs](https://fastapi.tiangolo.com/) if working on backend

---

## 📦 Deployment

The recommended deployment platform is [**Vercel**](https://vercel.com) (official host for Next.js apps). Just push your repo and connect it with Vercel.

- Docs: [Deploying with Vercel](https://nextjs.org/docs/app/building-your-application/deploying)