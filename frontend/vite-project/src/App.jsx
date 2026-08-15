import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";

const App = () => {
    return (
        <BrowserRouter>
            <div className="min-h-screen bg-slate-50">

                {/* Sidebar */}
                <Sidebar />

                {/* Main Area */}
                <div className="ml-64">

                    {/* Navbar */}
                    <Navbar />

                    {/* Page Content */}
                    <main className="px-8 pb-10 pt-28">
                        <Routes>

                            <Route
                                path="/"
                                element={<Dashboard />}
                            />

                            <Route
                                path="/students"
                                element={<Students />}
                            />

                            <Route
                                path="/students/add"
                                element={<AddStudent />}
                            />

                            <Route
                                path="/students/:id"
                                element={<StudentDetails />}
                            />

                        </Routes>
                    </main>

                </div>

            </div>
        </BrowserRouter>
    );
};

export default App;