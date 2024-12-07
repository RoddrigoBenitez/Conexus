import express from "express";
import dbConnect from "./db/dbConnect";
import router from "./routes";
import dotenv from "dotenv"

const app = express()

dotenv.config()


const PORT = process.env.PORT
const HOST = process.env.HOST
//app.use(express.json())

app.get('/', (req, res) =>{
    res.send("Hello world!S")
})

app.use('/models', router)

dbConnect()

app.listen(PORT, () =>{
    console.log(`Server is running on port: http://${HOST}${PORT}`)
})