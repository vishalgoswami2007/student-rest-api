import StudentForm from "../components/StudentForm";

const AddStudent = () => {

    const handleSubmit = (data) => {
        console.log("Student Data:", data);
    };

    return (
        <div className="mx-auto max-w-4xl space-y-8">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Add Student
                </h1>

                <p className="mt-1 text-sm text-slate-500">
                    Create a new student record.
                </p>
            </div>

            <StudentForm onSubmit={handleSubmit} />

        </div>
    );
};

export default AddStudent;