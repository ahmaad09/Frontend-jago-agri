import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FormResetEmail = () => {
    const [oldEmail, setOldEmail] = useState(""); // Email lama
    const [newEmail, setNewEmail] = useState(""); // Email baru
    const [password, setPassword] = useState(""); // Password untuk verifikasi
    const [error, setError] = useState(""); // Pesan error

    const handleResetEmail = async (event) => {
        event.preventDefault();
        setError(""); // Reset pesan error saat submit form

        // Validasi input secara eksplisit
        if (!oldEmail.trim() || !newEmail.trim() || !password.trim()) {
            toast.error("Semua kolom harus diisi!");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/reset-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: oldEmail, newEmail, password }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Email berhasil diubah! Silakan login kembali.");
                setTimeout(() => {
                    window.location.href = "/login"; // Redirect setelah notifikasi
                }, 2000);
            } else {
                toast.error(data.message || "Terjadi kesalahan saat mereset email.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Tidak dapat terhubung ke server. Silakan coba lagi.");
        }
    };

    return (
        <div>
            <ToastContainer />
            <form onSubmit={handleResetEmail} className="flex flex-col">
                <InputForm
                    type="email"
                    name="oldEmail"
                    placeholder="Email Lama"
                    htmlFor="oldEmail"
                    id="oldEmail"
                    value={oldEmail}
                    onChange={(e) => setOldEmail(e.target.value)}
                    required
                />

                <InputForm
                    type="email"
                    name="newEmail"
                    placeholder="Email Baru"
                    htmlFor="newEmail"
                    id="newEmail"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    required
                />

                <InputForm
                    type="password"
                    name="password"
                    placeholder="Password untuk Verifikasi"
                    htmlFor="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <div className="flex justify-center w-full mt-5 ">
                    <Button
                        type="submit"
                        className="text-white w-1/3 hover:bg-yellow-600 bg-kuning"
                    >
                        Confirm
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default FormResetEmail;
