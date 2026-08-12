import express from "express";
import cors from "cors";
import morgan from "morgan";
import middleware  from "./middleware/error.middleware.js";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use(cors());
app.use(morgan("dev"));
app.use(express.json())
app.use("/api/student", studentRoutes);

export default app;