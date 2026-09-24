import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { connection } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;


app.use(express.json());
app.use(cors({
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/api/auth", authRoutes);

app.get("/",(req,res)=>{
    res.send("Server is working")
})
connection().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running on http://localhost:${PORT}`);
    });
});