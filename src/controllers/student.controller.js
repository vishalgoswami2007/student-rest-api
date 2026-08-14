
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

const getStudents = async (req, res) => {
    try {
        const { course, age } = req.query;

        const filter = {};

        if (course) {
            filter.course = course;
        }

        if (age) {
            filter.age = age;
        }

        const students = await Student.find(filter);

        res.status(200).json({
            success: true,
            message: "Students fetched successfully",
            data: students
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
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

const updateStudent = async (req,res) => {
      try {
        const student = await Student.findByIdAndUpdate(req.params.id , req.body , {new: true});
         if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found",
                data: student
            });
         }
            res.status(200).json({
            success: true,
            message: "Student found successfully",
            data: student
        });

      } catch (error) {
        res.status(500).json({
            success:false,
            message: error.message
        })
      }
}

const deleteStudent = async (req,res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id )
        if (!student) {
            return res.status(404).json({
                success: false,
                message:"user not found",
                data:student
            });
        }
        res.status(201).json({
            success:true,
            message:"User Delete Successfully",
            data:student
        })
    } catch (error) {
        res.status(404).json({
            success:false,
            message: error.message
        })
    }
}

export { createStudent , getStudents , getStudentById , updateStudent , deleteStudent};