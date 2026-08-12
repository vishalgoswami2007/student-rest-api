import express from "express";
import cors from "cors";
import morgan from "morgan";
import middleware  from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res, next ) => {
    next(new Error("Test Error"));
});
app.use(middleware)

export default app;