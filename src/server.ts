import dotenv from "dotenv"
import express, { Application } from "express"
dotenv.config()

const app: Application = express()
const PORT = process.env.PORT || 9001

app.listen(PORT, (): void => {
    console.log(`App started ${PORT}`);
})
