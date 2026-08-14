import express from "express";
import { getStudents , createStudent  , getStudentById} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent)
router.get("/" , getStudents)
router.get("/:id" , getStudentById)

export default router;