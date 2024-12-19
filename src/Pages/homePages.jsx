import React, { useState, useEffect, Fragment } from "react";
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const HomePages = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasi waktu loading
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 detik

        return () => clearTimeout(timer);
    }, []);

    return (
        <Fragment>
            {isLoading ? (
                <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
                    <img src="/logo.svg" alt="" className="animate-bounce w-96" />
                </div>
            ) : (
                <>
                    <Header>
                        <Navigasi
                            signIn="Sign In"
                            classname="bg-hijau py-1 px-4 rounded-xl text-white hover:bg-kuning duration-150 mr-10"
                            tentangKami="Tentang Kami"
                            kontakKamiText="Kontak Kami"
                        />
                    </Header>
                    <div className="container mx-auto">
                        <div className="mt-16 mb-32">
                            <div className="gap-5 flex-col md:flex-row flex items-center">
                                <img src="/img/jagung-1.png" alt="" data-aos="fade-right" className="md:w-[50%] md:h-[50%] " />
                                <div className="flex flex-col gap-4 mx-5" data-aos="fade-left">
                                    <h2 className="px-3 py-2 bg-hijau rounded-full text-white font-semibold text-md w-fit mb-2">Selamat Datang di JagoAgri!</h2>
                                    <p className="lg:text-lg sm:text-sm">
                                        Jagung adalah tanaman pangan penting yang termasuk dalam keluarga rumput-rumputan (Poaceae) dan memiliki peran utama sebagai sumber karbohidrat di banyak negara. Selain sebagai makanan pokok, jagung juga digunakan dalam industri pakan ternak dan bahan baku produk olahan seperti minyak jagung, tepung, dan pati. Tanaman ini mudah dibudidayakan di berbagai kondisi iklim, terutama di daerah tropis. Jagung juga memiliki siklus panen yang relatif cepat dan produktivitas tinggi, menjadikannya pilihan ideal dalam mendukung ketahanan pangan dan industri pertanian.
                                    </p>
                                    {/* <div className="bg-hijau h-10 w-fit rounded-xl p-3 flex items-center shadow-xl shadow-slate-400 mt-10">
                                        <img src="/icons/panah.png" alt="joni" />
                                        <p className="text-white font-bold text-md py-1 px-3">Berhabung Sekarang</p>
                                    </div> */}
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 items-center">
                                <h1 className="text-center mt-72 text-black text-2xl font-semibold"> Download <span className="text-hijau font-bold">JagoAgri</span></h1>
                                <img src="/icons/playstore.png" alt="" width={"200px"} className="" />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </Fragment>
    );
};

export default HomePages;
