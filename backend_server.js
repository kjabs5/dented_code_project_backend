import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 8000;

//Connect Mongo
import mongoClient from './config/db.js';
mongoClient();

//middlewares
app.use(helmet());
app.use(morgan("tiny"));
app.use(express.urlencoded());
app.use(express.json());

// load routers
import customerRouter from './routers/customerRouter.js';


//use routers
app.use("/api/v1/customer", customerRouter);

app.use("/", (req, res) => {
    res.json({ message: "hello world from backend server" });
})

app.listen(PORT, (error) => {
    if (error) {
        return console.log(error);
    }
    console.log(`server is running at http://localhost:${PORT}`)
})
console.log("hello server");