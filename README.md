# Portfolio — Jagadeesh Osuru

A modern full-stack developer portfolio built with React + Vite + Tailwind CSS + FastAPI.

## Folder Structure

```
x/
├── frontend/               # React + Vite + Tailwind
│   ├── src/
│   │   ├── components/     # Navbar, Hero, About, Skills, Projects, Contact, Footer
│   │   ├── context/        # ThemeContext (dark/light)
│   │   ├── data.js         # All portfolio content (edit this!)
│   │   ├── App.jsx
│   │   └── index.css
│   ├── vercel.json
│   └── .env
└── backend/                # FastAPI + PostgreSQL
    ├── main.py
    ├── requirements.txt
    └── .env
```

---

## Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
pip install -r requirements.txt

# Edit .env with your PostgreSQL credentials
uvicorn main:app --reload
```

---

## Deployment

### Frontend → Vercel

1. Push `frontend/` to GitHub
2. Import repo on [vercel.com](https://vercel.com)
3. Set env var: `VITE_API_URL=https://your-backend.onrender.com`
4. Deploy ✅

### Backend → Render

1. Push `backend/` to GitHub
2. Create a new **Web Service** on [render.com](https://render.com)
3. Set:
   - Build command: `pip install -r requirements.txt`
   - Start command: `uvicorn main:app --host 0.0.0.0 --port $PORT`
4. Add env vars: `DATABASE_URL`, `ALLOWED_ORIGINS`
5. Add a **PostgreSQL** database on Render and copy the connection string
6. Deploy ✅

---

## Customization

Edit `frontend/src/data.js` to update:
- Your name, role, bio
- Skills list
- Projects (title, description, tags, links)
- Location coordinates for the map
- Social links

Replace `frontend/public/resume.pdf` with your actual resume.

---

## Tech Stack

| Layer | Tech |
|-------|------|
| Frontend | React 18, Vite, Tailwind CSS v4 |
| Animations | Framer Motion |
| 3D Hero | Three.js |
| Map | React-Leaflet + OpenStreetMap |
| Backend | FastAPI, asyncpg |
| Database | PostgreSQL |
| Frontend Deploy | Vercel |
| Backend Deploy | Render |
