import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="flex h-screen flex-col justify-between border-e bg-white fixed">
            <div className="px-4 py-6 flex flex-col justify-center">
                <span className="w-40 ml-2">
                    <img src="/logo.svg" alt="" width={"80px"} />
                </span>

                <ul className="mt-6 space-y-1">
                    <li>
                        <Link
                            to="/admin"
                            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700"
                        >
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/news"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Berita
                        </Link>
                        <Link
                            to="/tambah"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Tambahkan Berita
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/users"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Pengguna
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/settings"
                            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                        >
                            Pengaturan
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
                <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        className="size-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-xs">
                            <strong className="block font-medium">Anjai</strong>
                            <span> jagoagri.com </span>
                        </p>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;