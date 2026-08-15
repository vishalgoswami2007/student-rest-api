import { useState } from "react";
import StudentTable from "../components/StudentTable";
import ConfirmModal from "../components/ConfirmModal";

const Students = () => {
    const [selectedStudent, setSelectedStudent] = useState(null);

    const students = [
        {
            _id: "1",
            name: "Vishal Goswami",
            email: "vishal@gmail.com",
            age: 20,
            course: "BCom",
        },
        {
            _id: "2",
            name: "Rahul Sharma",
            email: "rahul@gmail.com",
            age: 21,
            course: "BCA",
        },
        {
            _id: "3",
            name: "Priya Singh",
            email: "priya@gmail.com",
            age: 19,
            course: "BBA",
        },
        {
            _id: "4",
            name: "Aman Kumar",
            email: "aman@gmail.com",
            age: 22,
            course: "BSc",
        },
    ];

    const handleDelete = (student) => {
        setSelectedStudent(student);
    };

    const confirmDelete = () => {
        console.log("Delete:", selectedStudent);
        setSelectedStudent(null);
    };

    return (
        <div className="space-y-8">

            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Students
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage all student records.
                    </p>
                </div>

                <button className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800">
                    + Add Student
                </button>

            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-3 md:flex-row">

                    <input
                        type="text"
                        placeholder="Search students..."
                        className="flex-1 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400 focus:bg-white"
                    />

                    <select className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none focus:border-slate-400">
                        <option>All Courses</option>
                        <option>BCom</option>
                        <option>BCA</option>
                        <option>BBA</option>
                        <option>BSc</option>
                    </select>

                </div>
            </div>

            <StudentTable
                students={students}
                onDelete={handleDelete}
            />

            <ConfirmModal
                isOpen={!!selectedStudent}
                title="Delete Student?"
                message={`Are you sure you want to delete ${selectedStudent?.name}? This action cannot be undone.`}
                onCancel={() => setSelectedStudent(null)}
                onConfirm={confirmDelete}
            />

        </div>
    );
};

export default Students;