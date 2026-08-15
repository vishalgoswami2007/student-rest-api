import express from "express";
import cors from "cors";
import morgan from "morgan";
import errorMiddleware from "./middleware/error.middleware.js";
import studentRoutes from "./routes/student.routes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/student", studentRoutes);

// Error middleware should be last
app.use(errorMiddleware);

export default app;