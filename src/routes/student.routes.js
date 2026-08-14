import express from "express";
import { getStudents , createStudent  , getStudentById , updateStudent , deleteStudent} from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", createStudent)
router.get("/" , getStudents)
router.get("/:id" , getStudentById)
router.put("/:id" , updateStudent)
router.delete("/:id" , deleteStudent)

export default router;