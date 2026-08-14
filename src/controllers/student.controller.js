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

export default createStudent;