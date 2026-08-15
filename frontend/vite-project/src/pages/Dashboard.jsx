import { useEffect, useState } from "react";

import StatCard from "../components/StatCard.jsx";
import StudentTable from "../components/StudentTable.jsx";

import { getStudents } from "../services/studentApi.js";

const Dashboard = () => {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await getStudents();

                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    // Total students
    const totalStudents = students.length;

    // Unique courses
    const totalCourses = new Set(
        students.map((student) => student.course)
    ).size;

    // Average age
    const averageAge =
        totalStudents > 0
            ? (
                  students.reduce(
                      (total, student) => total + student.age,
                      0
                  ) / totalStudents
              ).toFixed(1)
            : 0;

    return (
        <div className="space-y-8">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Here's what's happening with your students.
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">

                <StatCard
                    title="Total Students"
                    value={loading ? "..." : totalStudents}
                    description="Students in database"
                    icon="👨‍🎓"
                />

                <StatCard
                    title="Total Courses"
                    value={loading ? "..." : totalCourses}
                    description="Active courses"
                    icon="📚"
                />

                <StatCard
                    title="Average Age"
                    value={loading ? "..." : averageAge}
                    description="Across all students"
                    icon="📊"
                />

                <StatCard
                    title="New Students"
                    value={loading ? "..." : totalStudents}
                    description="Current student records"
                    icon="✨"
                />

            </div>

            {/* Recent Students */}
            <StudentTable students={students} />

        </div>
    );
};

export default Dashboard;