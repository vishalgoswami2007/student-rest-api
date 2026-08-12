const createStudent = (req, res) => {
    const student = req.body;

    res.status(201).json({
        success: true,
        message: "Student created",
        data: student
    });
};

export default createStudent;