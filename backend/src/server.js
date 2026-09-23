import express from "express"
import dotenv from "dotenv"
import cors from "cors"
dotenv.config()

const app = express()
const port = 5000

app.use(cors({
    credentials: true,
    methods: ["GET","PUT","PATCH","DELETE","OPTIONS"],
    allowedHeaders: {"Content-Type": "Authorization"}
}))

app.use(express.json())

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})