import express from 'express';
import helmet from 'helmet';

const app = express();
const PORT = process.env.PORT || 8000;

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