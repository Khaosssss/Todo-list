import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import todoroutes from './routes/todo.routes.js';
import cors from 'cors';

dotenv.config(); // ✅ Load env vars before anything else

const app = express();

app.use(express.json());
app.use(cors());

// Connect to DB
connectDB();

// Routes
app.use("/api/todos", todoroutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
