import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import connectDB from './db/db.js';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';


connectDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());



app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users',userRouter);

export default app;