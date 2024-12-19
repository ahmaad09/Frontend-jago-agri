import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
    return (
        <header className="bg-white shadow p-4 flex items-center justify-between fixed top-0 left-[12.5rem] z-50 right-0">
            <h1 className="text-xl font-semibold">Welcome, Admin</h1>
            <div>
                <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
                    Logout
                </Link>
            </div>
        </header>
    );
};

export default HeaderAdmin;
