import express from "express";
import dotenv from 'dotenv';
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
dotenv.config();
const port = process.env.PORT || 5000;
import UserRoutes from './routes/userRoutes.js'


const app = express();

//app.use(notFound);
//app.use(errorHandler);

app.use('/api/users', UserRoutes);
app.get('/', (req, res) => res.send('Server is ready'));
app.listen(port, () => console.log(`Server started on port ${port}`));