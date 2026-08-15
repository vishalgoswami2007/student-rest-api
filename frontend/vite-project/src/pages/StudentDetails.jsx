import { Link } from "react-router-dom";

const StudentDetails = () => {
    const student = {
        name: "Vishal Goswami",
        email: "vishal@gmail.com",
        age: 20,
        course: "BCom",
        id: "6a7ecfb2faacb582f2a96717",
    };

    return (
        <div className="mx-auto max-w-4xl space-y-8">

            <div className="flex items-center justify-between">

                <div>
                    <h1 className="text-2xl font-bold text-slate-900">
                        Student Details
                    </h1>

                    <p className="mt-1 text-sm text-slate-500">
                        View complete student information.
                    </p>
                </div>

                <Link
                    to="/students"
                    className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50"
                >
                    ← Back
                </Link>

            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

                <div className="bg-slate-900 px-8 py-10 text-white">

                    <div className="flex items-center gap-5">

                        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-2xl font-bold text-slate-900">
                            {student.name.charAt(0)}
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold">
                                {student.name}
                            </h2>

                            <p className="mt-1 text-sm text-slate-300">
                                {student.course} Student
                            </p>
                        </div>

                    </div>

                </div>

                <div className="grid gap-6 p-8 md:grid-cols-2">

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Email
                        </p>

                        <p className="mt-2 font-medium text-slate-900">
                            {student.email}
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Age
                        </p>

                        <p className="mt-2 font-medium text-slate-900">
                            {student.age} years
                        </p>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Course
                        </p>

                        <span className="mt-2 inline-block rounded-full bg-slate-100 px-3 py-1 text-sm font-semibold text-slate-700">
                            {student.course}
                        </span>
                    </div>

                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            Student ID
                        </p>

                        <p className="mt-2 break-all font-mono text-sm text-slate-600">
                            {student.id}
                        </p>
                    </div>

                </div>

                <div className="flex justify-end gap-3 border-t border-slate-200 px-8 py-5">

                    <button className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
                        Edit
                    </button>

                    <button className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-red-700">
                        Delete
                    </button>

                </div>

            </div>

        </div>
    );
};

export default StudentDetails;