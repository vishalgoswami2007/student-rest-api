import StatCard from "../components/StatCard";
import StudentTable from "../components/StudentTable";

const Dashboard = () => {
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
    ];

    return (
        <div className="space-y-8">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Dashboard
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Here's what's happening with your students.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Total Students"
                    value="24"
                    description="+4 this month"
                    icon="👨‍🎓"
                />

                <StatCard
                    title="Total Courses"
                    value="5"
                    description="Active courses"
                    icon="📚"
                />

                <StatCard
                    title="Average Age"
                    value="20.4"
                    description="Across all students"
                    icon="📊"
                />

                <StatCard
                    title="New Students"
                    value="4"
                    description="Added this month"
                    icon="✨"
                />
            </div>

            <StudentTable students={students} />

        </div>
    );
};

export default Dashboard;