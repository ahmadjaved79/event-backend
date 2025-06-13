---

## 📁 `event-backend/README.md` (For Render-hosted Backend)

```markdown
# ⚙️ Event Manager - Backend (Node.js + Express + MongoDB)

This is the **backend** of the Dynamic Event Management System. It exposes RESTful APIs for creating, reading, and deleting event data using **Express** and **MongoDB (via Mongoose)**.



## 📸 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET    | `/api/events`       | Get all events |
| POST   | `/api/events`       | Add a new event |
| DELETE | `/api/events/:id`   | Delete an event by ID |

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- CORS + dotenv

## ⚙️ Environment Variables

Create a `.env` file in the root of `server/`:
MONGO_URI=mongodb+srv://your-user:your-pass@cluster.mongodb.net/eventDB?retryWrites=true&w=majority

bash
Copy
Edit

## 🚀 Getting Started Locally

```bash
git clone https://github.com/ahmadjaved79/event-backend.git
cd event-backend
npm install
node app.js
Backend runs at: http://localhost:5000

🧠 Folder Structure
bash
Copy
Edit
server/
├── models/
│   └── Event.js
├── routes/
│   └── eventRoutes.js
├── app.js
└── .env


✍️ Author
Ahmad Javed Shaik

