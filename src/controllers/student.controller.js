
import Student from "../models/student.model.js";

const createStudent = async (req, res) => {
    try {
        const student = await Student.create(req.body);

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

const getStudents = async(req,res) => {
    try {
        const student = await Student.find();

        res.status(200).json({
            success: true,
            message: "student find successfully",
            data: student
        });
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

export { createStudent , getStudents };