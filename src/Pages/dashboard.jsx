import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import WeatherForecast from "../components/Elemets/Fragments/weatherComponent";
import Footer from "../components/Elemets/Fragments/Footer";
import MyCalendar from "../components/Elemets/Fragments/Calanderd";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CardNews from "../components/Elemets/data/CardNews";
import Cards from "../components/Elemets/data/CardPenyakit";
import 'tailwindcss/tailwind.css'; // Pastikan tailwindcss diimpor jika perlu

// Inisialisasi AOS
AOS.init();

const Dashboard = () => {
    return (
        <Fragment className="container mx-auto">
            <Header>
                <Navigasi className="sm:hidden"
                    dashboardText="Dashboard"
                    forumText="Forum"
                    panduanText="Panduan"
                    news = "News"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto">
                <div className="flex flex-col mt-12 gap-5 mx-5">
                    <div className="flex gap-5 sm:flex-row flex-col sm:justify-center">
                        <img src="/img/jagung-1.png" alt="" width={"500px"} data-aos="fade-right" />
                        <div className="flex flex-col gap-4" data-aos="fade-left">
                            <h2 className="p-4 bg-hijau rounded-full text-white font-bold text-md w-fit mb-5">Selamat Datang di JagoAgri!</h2>
                            <p className="text-md">
                                Jagung adalah tanaman pangan penting yang termasuk dalam keluarga rumput-rumputan (Poaceae) dan memiliki peran utama sebagai sumber karbohidrat di banyak negara. Selain sebagai makanan pokok, jagung juga digunakan dalam industri pakan ternak dan bahan baku produk olahan seperti minyak jagung, tepung, dan pati. Tanaman ini mudah dibudidayakan di berbagai kondisi iklim, terutama di daerah tropis. Jagung juga memiliki siklus panen yang relatif cepat dan produktivitas tinggi, menjadikannya pilihan ideal dalam mendukung ketahanan pangan dan industri pertanian.
                            </p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h2 className="font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-16 mb-10">Diagnosis of disease and pest</h2>
                        <div className="flex mt-16 gap-5">
                            <Cards />
                        </div>
                    </div>
                    <h2 className="font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-8">Weather</h2>
                    <WeatherForecast />
                </div>
                <MyCalendar />
                <CardNews />
            </div>
            <Footer />
        </Fragment>
    );

};


export default Dashboard;
