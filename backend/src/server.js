import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import connectDB from "./config/db.js"
dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors({
    credentials: true,
    methods: ["GET","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: {"Content-Type": "Authorization"}
}))

app.use(express.json())

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});