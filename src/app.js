import express from "express";
import cors from "cors";
import morgan from "morgan";
import middleware  from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())

export default app;