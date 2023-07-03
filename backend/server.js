import express from "express";
import connectDB from "./config/db.js";
import dotenv from 'dotenv';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import cookieParser from 'cookie-parser'
dotenv.config();
const port = process.env.PORT || 5000;
connectDB();
import UserRoutes from './routes/userRoutes.js'


const app = express();


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use('/api/users', UserRoutes);
app.get('/', (req, res) => res.send('Server is ready'));
app.use(notFound);
app.use(errorHandler);
app.listen(port, () => console.log(`Server started on port ${port}`));