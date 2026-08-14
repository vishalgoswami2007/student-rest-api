import express from "express";
import { getStudents , createStudent } from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent)
router.get("/" , getStudents)

export default router;