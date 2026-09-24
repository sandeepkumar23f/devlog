import dotenv from "dotenv";
import { MongoClient } from "mongodb";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

export const connection = async () => {
    if (db) {
        return db;
    }

    try {
        await client.connect();

        db = client.db();

        console.log("MongoDB connected successfully!");

        return db;
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        process.exit(1);
    }
};