import { NavLink } from "react-router-dom";

const Sidebar = () => {
    const links = [
        { name: "Dashboard", path: "/" },
        { name: "Students", path: "/students" },
        { name: "Add Student", path: "/students/add" },
    ];

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-slate-200 bg-white">
            <div className="flex h-full flex-col">

                {/* Logo */}
                <div className="flex h-20 items-center border-b border-slate-200 px-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-lg font-bold text-white">
                            S
                        </div>

                        <div>
                            <h1 className="text-lg font-bold text-slate-900">
                                StudentHub
                            </h1>
                            <p className="text-xs text-slate-500">
                                Management System
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <nav className="flex-1 space-y-2 px-4 py-6">

                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Main Menu
                    </p>

                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `block rounded-xl px-4 py-3 text-sm font-medium transition ${
                                    isActive
                                        ? "bg-slate-900 text-white shadow-sm"
                                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}

                    <div className="my-6 border-t border-slate-200" />

                    <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-400">
                        System
                    </p>

                    <button className="w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-slate-600 transition hover:bg-slate-100">
                        Settings
                    </button>

                </nav>

                {/* Bottom Profile */}
                <div className="border-t border-slate-200 p-4">
                    <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-200 font-semibold text-slate-700">
                            V
                        </div>

                        <div className="min-w-0">
                            <p className="truncate text-sm font-semibold text-slate-900">
                                Vishal
                            </p>
                            <p className="truncate text-xs text-slate-500">
                                Administrator
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </aside>
    );
};

export default Sidebar;