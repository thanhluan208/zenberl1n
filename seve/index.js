
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'

import userRouter from "./routes/user.js";
import reservationRouter from './routes/reservation.js'
import googleAuthRouter from './routes/googleauth.js'
import testimonialRouter from './routes/testimonial.js'
import feedbackRouter from './routes/feedback.js'

const app = express();
dotenv.config()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors());

app.use("/user", userRouter);
app.use('/reservation', reservationRouter)
app.use('/googleauth', googleAuthRouter)
app.use('/testimonial', testimonialRouter)
app.use('/feedback', feedbackRouter)

app.get('/', (req,res) => {
  res.send("hello world")
})

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set('useFindAndModify', false);