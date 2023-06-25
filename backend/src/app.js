import express from "express";
import cors  from "cors";
import toDoRouter from "../src/router/toDoRouter.js";
import connectDB  from "../src/database/db.js"; 
import handler from "./middleware/errorHandler.js";
connectDB();

const app = express();
app.use(cors());

const PORT = 5000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/toDo', toDoRouter);

app.listen(PORT , () => {
    console.log("Server listening on Port", PORT);
});