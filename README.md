# Pulseon Ai

Pulseon Ai is a premium AI-powered healthcare intelligence product prototype with a modern React frontend and a separate backend workspace scaffold.

## Project Structure

```text
Pulseon Ai/
├── frontend/   # React + Vite + Tailwind application
├── backend/    # Backend starter workspace
└── README.md
```

## Frontend

The frontend contains:

- Landing page
- Auth page
- Dashboard
- Maps page
- Hospitals page
- Insights / AI Assistant page
- Data Upload page
- Settings page

### Run Frontend

```bash
cd frontend
npm install
npm run dev
```

Default local URL is usually:

- `http://localhost:5173`

Useful routes:

- `/`
- `/auth`
- `/dashboard`
- `/maps`
- `/hospitals`
- `/insights`
- `/data-upload`
- `/settings`

## Backend

The backend folder is currently a clean starter service so the repository stays organized and ready for future API work.

### Run Backend

```bash
cd backend
npm install
npm run dev
```

Default backend URL:

- `http://localhost:4000`

## GitHub Setup

To put this project on GitHub:

1. Create a new empty repository on GitHub, for example `pulseon-ai`.
2. In your local project root, run:

```bash
git init
git add .
git commit -m "Initial Pulseon Ai app structure"
git branch -M main
git remote add origin https://github.com/<your-username>/pulseon-ai.git
git push -u origin main
```

If this folder is already a git repo, skip `git init` and just run:

```bash
git add .
git commit -m "Organize Pulseon Ai into frontend/backend structure"
git branch -M main
git remote add origin https://github.com/<your-username>/pulseon-ai.git
git push -u origin main
```

If a remote already exists, replace the remote URL with:

```bash
git remote set-url origin https://github.com/<your-username>/pulseon-ai.git
git push -u origin main
```

## Recommended Repo Architecture

- `frontend/`
  Contains all UI routes, components, page modules, assets, Tailwind styles, and app shell logic.

- `backend/`
  Reserved for APIs, auth, upload processing, AI extraction endpoints, database integration, and hospital data services.

Good next backend folders would be:

```text
backend/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── services/
│   ├── middleware/
│   └── server.js
└── package.json
```

## Notes

- Frontend dependencies are already located under `frontend/`.
- The backend is intentionally lightweight right now so you can expand it when APIs are needed.
- Build the frontend with:

```bash
cd frontend
npm run build
```
