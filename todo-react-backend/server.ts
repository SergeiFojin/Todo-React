import * as express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import tasks from './taskRouter';

mongoose.set('strictQuery', false);

const app = express.default();
const PORT: number = 4000;
const DATABASE_URL: string = `${process.env.DATABASE_URL}`;

app.use(cors());
app.use(express.json());
app.use('/api', tasks);

const start = async () => {
    try {
        await mongoose.connect(DATABASE_URL);
        app.listen(PORT, () => {
            console.log(`Server is listening on port ${PORT}`);
            console.log(process.pid);
        })
    } catch (e: any) {
        console.log(e.message);
    }
}

start()
