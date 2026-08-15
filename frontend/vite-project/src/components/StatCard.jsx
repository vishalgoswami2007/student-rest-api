const StatCard = ({ title, value, description, icon }) => {
    return (
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">

            <div className="flex items-start justify-between">

                {/* Text */}
                <div>
                    <p className="text-sm font-medium text-slate-500">
                        {title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                        {value}
                    </h3>

                    <p className="mt-2 text-xs text-slate-500">
                        {description}
                    </p>
                </div>

                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl">
                    {icon}
                </div>

            </div>
        </div>
    );
};

export default StatCard;