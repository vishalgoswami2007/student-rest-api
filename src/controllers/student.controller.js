
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

const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student found successfully",
            data: student
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export { createStudent , getStudents , getStudentById };