const StudentTable = ({ students = [], onEdit, onDelete }) => {
    return (
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">

            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">

                <div>
                    <h3 className="text-lg font-bold text-slate-900">
                        Recent Students
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                        Manage your student records
                    </p>
                </div>

                <button className="rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
                    View All
                </button>

            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left">

                    <thead className="bg-slate-50">
                        <tr>
                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Student
                            </th>

                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Email
                            </th>

                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Age
                            </th>

                            <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Course
                            </th>

                            <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wide text-slate-500">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-100">

                        {students.length > 0 ? (
                            students.map((student) => (
                                <tr
                                    key={student._id}
                                    className="transition hover:bg-slate-50"
                                >

                                    {/* Student */}
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">

                                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 font-semibold text-slate-700">
                                                {student.name?.charAt(0)?.toUpperCase()}
                                            </div>

                                            <div>
                                                <p className="font-semibold text-slate-900">
                                                    {student.name}
                                                </p>

                                                <p className="text-xs text-slate-500">
                                                    Student
                                                </p>
                                            </div>

                                        </div>
                                    </td>

                                    {/* Email */}
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {student.email}
                                    </td>

                                    {/* Age */}
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {student.age}
                                    </td>

                                    {/* Course */}
                                    <td className="px-6 py-4">
                                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                                            {student.course}
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="px-6 py-4">
                                        <div className="flex justify-end gap-2">

                                            <button
                                                onClick={() => onEdit?.(student)}
                                                className="rounded-lg border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:bg-slate-100"
                                            >
                                                Edit
                                            </button>

                                            <button
                                                onClick={() => onDelete?.(student)}
                                                className="rounded-lg border border-red-100 px-3 py-1.5 text-xs font-semibold text-red-600 transition hover:bg-red-50"
                                            >
                                                Delete
                                            </button>

                                        </div>
                                    </td>

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td
                                    colSpan="5"
                                    className="px-6 py-16 text-center"
                                >
                                    <div className="mx-auto max-w-sm">
                                        <div className="text-4xl">
                                            👨‍🎓
                                        </div>

                                        <h4 className="mt-3 font-semibold text-slate-900">
                                            No students found
                                        </h4>

                                        <p className="mt-1 text-sm text-slate-500">
                                            Students will appear here once you add them.
                                        </p>
                                    </div>
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default StudentTable;