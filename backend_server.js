import express from 'express';
import helmet from 'helmet';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

//Connect Mongo
import mongoClient from './config/db.js';
mongoClient();

//middlewares
app.use(helmet());


app.use("/", (req, res) => {
    res.json({ message: "hello world from api" });
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log(`server is running at http://localhost:${PORT}`)
})
console.log("hello server");