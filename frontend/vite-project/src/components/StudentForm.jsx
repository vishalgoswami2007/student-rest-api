import { useState } from "react";

const StudentForm = ({ initialData = {}, onSubmit, loading = false }) => {
    const [formData, setFormData] = useState({
        name: initialData.name || "",
        age: initialData.age || "",
        email: initialData.email || "",
        course: initialData.course || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        onSubmit?.({
            ...formData,
            age: Number(formData.age),
        });
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >

            <div className="mb-6">
                <h3 className="text-lg font-bold text-slate-900">
                    Student Information
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                    Enter the student's details below.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">

                {/* Name */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Full Name
                    </label>

                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter student name"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Email Address
                    </label>

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="student@example.com"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                    />
                </div>

                {/* Age */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Age
                    </label>

                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                        placeholder="Enter age"
                        min="15"
                        max="100"
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                    />
                </div>

                {/* Course */}
                <div>
                    <label className="mb-2 block text-sm font-semibold text-slate-700">
                        Course
                    </label>

                    <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-slate-400 focus:bg-white"
                    >
                        <option value="">Select course</option>
                        <option value="BCom">BCom</option>
                        <option value="BCA">BCA</option>
                        <option value="BBA">BBA</option>
                        <option value="BA">BA</option>
                        <option value="BSc">BSc</option>
                    </select>
                </div>

            </div>

            {/* Submit */}
            <div className="mt-6 flex justify-end">

                <button
                    type="submit"
                    disabled={loading}
                    className="rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
                >
                    {loading ? "Saving..." : "Save Student"}
                </button>

            </div>

        </form>
    );
};

export default StudentForm;