import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const DbURL = process.env.MongoDbURL;

//MongoDb Connection
try {
    mongoose.connect(DbURL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("Database connection was successful")

} catch (error) {
    console.log("Error : ",error)
}

//define Routes
app.use("/books", bookRoute);
app.use("/user", userRoute);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})