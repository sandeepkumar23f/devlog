import {MongoClient} from "mongodb"

const url = "mongodb+srv://Devlog:Devlog4321@cluster0.f2gjwjm.mongodb.net/Dev-Log?retryWrites=true&w=majority&appName=Cluster0";

const dbName = "Dev-Log"

const client = new MongoClient(url)

export const connection = async () => {
    const connect = await client.connect()
    console.log("MongoDB connected!")
    return connect.db(dbName)
}