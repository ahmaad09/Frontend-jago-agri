import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FormResetPassword = () => {
    const [email, setEmail] = useState("");
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [error, setError] = useState("");

    const handleResetPassword = async (event) => {
        event.preventDefault();
        setError("");

        // Validasi input
        if (!email || !oldPassword || !newPassword) {
            toast.error("Semua kolom harus diisi!");
            return;
        }
        if (newPassword.length < 6) {
            toast.error("Kata sandi harus minimal 6 karakter.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/reset-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, oldPassword, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                toast.success("Kata sandi berhasil diubah! Silakan login kembali.");
                setTimeout(() => {
                    window.location.href = "/login";
                }, 3000); // Redirect setelah 3 detik
            } else {
                toast.error(data.message || "Terjadi kesalahan saat mereset kata sandi.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Tidak dapat terhubung ke server. Silakan coba lagi.");
        }
    };

    return (
        <div>
            <form onSubmit={handleResetPassword} className="flex flex-col">
                <InputForm
                    type="email"
                    name="email"
                    placeholder="Email Terdaftar"
                    htmlFor="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <InputForm
                    type="password"
                    name="oldpassword"
                    placeholder="Old Password"
                    htmlFor="oldpassword"
                    id="oldpassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                />

                <InputForm
                    type="password"
                    name="resetpassword"
                    placeholder="New Password"
                    htmlFor="resetpassword"
                    id="resetpassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />

                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                <div className="flex justify-center w-full mt-5">
                    <Button
                        type="submit"
                        className="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600"
                    >
                        Confirm
                    </Button>
                </div>
            </form>

            {/* Tambahkan ToastContainer */}
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </div>
    );
};

export default FormResetPassword;
