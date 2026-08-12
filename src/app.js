import express from "express";
import cors from "cors";
import morgan from "morgan";

const app = express();

app.use(cors());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Backend Started");
});

export default app;