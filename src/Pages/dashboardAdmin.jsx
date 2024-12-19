import React from "react";
import Sidebar from "../components/Elemets/Fragments/Sidebar";
import Content from "../components/Elemets/Fragments/ContentAdmin";
import HeaderAdmin from "../components/Elemets/Fragments/HeaderAdmin";
import App from "./app";

const DashboarAdmin = () => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                <HeaderAdmin />
                <App/>
            </div>
        </div>
    );
};

export default DashboarAdmin;
