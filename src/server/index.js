import express from "express";
import colors from "colors"
import morgan from "morgan";
import dotenv from "dotenv"

dotenv.config()
const PORT = process.env.PORT
const app = express();

// todo: middlewares
app.use(morgan("dev"))
app.use(express.json())

// todo: endpoints

// todo: run app!
const bootstrap = () => {
    try {
        app.listen(PORT)
        console.log("listening on port 5000".bgBlue)
    } catch (error) {
        throw new Error(error)
    }
};

bootstrap()