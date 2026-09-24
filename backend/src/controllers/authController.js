import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connection } from "../config/db.js";

const JWT_SECRET = process.env.JWT_SECRET;

export const SignUp = async (req, res) => {
    try {
        const userData = req.body;

        if (!userData.email || !userData.password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required"
            });
        }

        const db = await connection();
        const collection = db.collection("users");

        const existingUser = await collection.findOne({
            email: userData.email
        });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "A user already exists with this email"
            });
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const result = await collection.insertOne({
            email: userData.email,
            password: hashedPassword
        });

        if (result.acknowledged) {
            const tokenData = {
                _id: result.insertedId.toString(),
                email: userData.email
            };

            const token = jwt.sign(
                tokenData,
                JWT_SECRET,
                { expiresIn: "5d" }
            );

            res.cookie("token", token, {
                httpOnly: true,
                sameSite: "none",
                secure: true,
                path: "/",
                
            });

            return res.status(201).json({
                success: true,
                message: "User created successfully"
            });
        }

        return res.status(500).json({
            success: false,
            message: "Failed to create user"
        });

    } catch (error) {
        console.error(error);

        
    }
};