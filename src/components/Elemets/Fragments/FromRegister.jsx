import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../Button/Index";
import InputForm from "../Input/Index";

const FromRegister = (props) => {
    const [showPassword, setShowPassword] = useState(false); // State untuk mengontrol tampilan password

    const hendelRegister = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        // Validasi password dan konfirmasi password
        if (password !== confirmPassword) {
            toast.error("Password dan konfirmasi password tidak cocok!");
            return;
        }

        // Kirim data ke backend menggunakan Fetch API
        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: username, 
                    email: email,
                    password: password,
                }),
            });

            // Parsing respons dari backend
            const data = await response.json();

            // Jika registrasi berhasil
            if (response.ok) {
                toast.success(data.message || "Registrasi berhasil!");
                setTimeout(() => {
                    window.location.href = "/login"; // ke halaman login
                }, 3000); // Redirect setelah 3 detik
            } else {
                toast.error(data.message || "Registrasi gagal!");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.error("Terjadi kesalahan saat registrasi.");
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
            <form action="" method="post" onSubmit={hendelRegister}>
                {/* Input untuk username */}
                <InputForm
                    type="text"
                    name="username"
                    placeholder="Username"
                    required
                />

                {/* Input untuk email */}
                <InputForm
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />

                {/* Input untuk password */}
                <div className="relative">
                    <InputForm
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none"
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 3c-3.857 0-7.28 2.154-9 5.643C2.72 12.846 6.143 15 10 15s7.28-2.154 9-5.643C17.28 5.154 13.857 3 10 3zm0 10c-2.636 0-4.779-1.46-6-3.357C5.22 6.46 7.364 5 10 5s4.779 1.46 6 3.357C14.779 11.54 12.636 13 10 13zm0-4a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Input untuk konfirmasi password */}
                <div className="relative">
                    <InputForm
                        type={showPassword ? "text" : "password"}
                        name="confirmPassword" 
                        placeholder="Confirm Password"
                        required
                    />
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500 focus:outline-none top-4"
                    >
                        {showPassword ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 3c-3.857 0-7.28 2.154-9 5.643C2.72 12.846 6.143 15 10 15s7.28-2.154 9-5.643C17.28 5.154 13.857 3 10 3zm0 10c-2.636 0-4.779-1.46-6-3.357C5.22 6.46 7.364 5 10 5s4.779 1.46 6 3.357C14.779 11.54 12.636 13 10 13zm0-4a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Tombol submit */}
                <div className="flex justify-center w-full mt-10"> 
                    <Button classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600" type="submit">
                        Sign Up
                    </Button>
                </div>
            </form>
        </>
    );
};

export default FromRegister;
