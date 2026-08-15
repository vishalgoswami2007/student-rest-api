const Navbar = () => {
    return (
        <header className="fixed left-64 right-0 top-0 z-30 h-20 border-b border-slate-200 bg-white">
            <div className="flex h-full items-center justify-between px-8">

                {/* Page Info */}
                <div>
                    <h2 className="text-xl font-bold text-slate-900">
                        Dashboard
                    </h2>

                    <p className="text-sm text-slate-500">
                        Manage your students and academic records
                    </p>
                </div>

                {/* Right Side */}
                <div className="flex items-center gap-5">

                    {/* Search */}
                    <div className="hidden lg:block">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-56 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                        />
                    </div>

                    {/* Notification */}
                    <button className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-600 transition hover:bg-slate-50">
                        🔔

                        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
                    </button>

                    {/* Profile */}
                    <div className="flex items-center gap-3 border-l border-slate-200 pl-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-bold text-white">
                            V
                        </div>

                        <div className="hidden md:block">
                            <p className="text-sm font-semibold text-slate-900">
                                Vishal
                            </p>

                            <p className="text-xs text-slate-500">
                                Admin
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;
