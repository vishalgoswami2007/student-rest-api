const ConfirmModal = ({
    isOpen,
    title = "Delete Student?",
    message = "Are you sure you want to delete this student?",
    onConfirm,
    onCancel,
    loading = false,
}) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4 backdrop-blur-sm">

            <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl">

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-xl">
                    ⚠️
                </div>

                {/* Content */}
                <div className="mt-5">
                    <h3 className="text-lg font-bold text-slate-900">
                        {title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-500">
                        {message}
                    </p>
                </div>

                {/* Buttons */}
                <div className="mt-6 flex justify-end gap-3">

                    <button
                        onClick={onCancel}
                        disabled={loading}
                        className="rounded-xl border border-slate-200 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:opacity-50"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={onConfirm}
                        disabled={loading}
                        className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ConfirmModal;