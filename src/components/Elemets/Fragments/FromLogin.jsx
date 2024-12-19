import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS Toastify
import InputForm from '../Input/Index';
import Button from '../Button/Index';
import Forgot from '../Button/Forgot';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Email dan password wajib diisi!');
            return;
        }

        setLoading(true);
        try {
            const response = await fetch('http://localhost:3000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem('token', data.token);
                toast.success('Login berhasil!', { position: "top-center", autoClose: 2000 });
                setTimeout(() => {
                    window.location.href = '/dashboard';
                }, 2500); // Redirect setelah 2.5 detik
            } else {
                toast.error(data.message || 'Login gagal!', { position: "top-center" });
            }
        } catch (err) {
            toast.error('Terjadi kesalahan saat menghubungi server.', { position: "top-center" });
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin} className="flex flex-col" method="POST">
                <InputForm
                    type="email"
                    name="email"
                    placeholder="Email"
                    htmlFor="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <div className="relative">
                    <InputForm
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        placeholder="Password"
                        htmlFor="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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

                {error && <p className="text-red-500 text-center">{error}</p>}

                <Forgot>Forgot Account?</Forgot>

                <div className="flex justify-center w-full mt-4">
                    <Button
                        classname="bg-yellow-500 text-white w-1/3 hover:bg-yellow-600"
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? 'Loading...' : 'Sign In'}
                    </Button>
                </div>
            </form>

            {/* Toast Notification */}
            <ToastContainer />
        </div>
    );
};

export default Login;
