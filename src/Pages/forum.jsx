import { Fragment, useState } from "react";
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import Button from "../components/Elemets/Button/Index";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Elemets/Fragments/Footer";
import { motion } from "framer-motion"; // Mengimpor framer-motion untuk animasi

// Initialize AOS
AOS.init();

const Forum = () => {
    const card = [
        { id: 1,  name: "wili sinaga",title: "Panduan Lengkap", img: "/img/image-9.png" },
        { id: 2,  name: "alif",title: "Jenis Pupuk dan jadwal ", img: "/img/image-10.png" },
        { id: 3,  name: "ahmad",title: "Cara Menanggulangi", img: "/img/image-11.png" },
        { id: 4,  name: "riska",title: "Jenis Pupuk dan Jadwal", img: "/img/image-9.png" },
        { id: 5,  name: "ima",title: "Lorem Ipsum", img: "/img/image-10.png" },
        { id: 6,  name: "arif",title: "Lorem Ipsum", img: "/img/image-11.png" },
    ];

    const [likes, setLikes] = useState(
        card.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
    );
    const [commentFormVisible, setCommentFormVisible] = useState(null); 

    const handleLike = (id) => {
        setLikes((prevLikes) => ({
            ...prevLikes,
            [id]: !prevLikes[id],
        }));
    };

    const toggleCommentForm = (id) => {
        setCommentFormVisible(commentFormVisible === id ? null : id);
    };

    return (
        <Fragment>
            <Header>
                <Navigasi
                    dashboardText="Dashboard"
                    forumText="Forum"
                    panduanText="Panduan"
                    news="News"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto mb-10">
                <h1 className="text-2xl text-hijau font-semibold border-b-hijau w-fit mt-10 border-b-2">
                    Forum
                </h1>
                <div className="bg-hijau p-3 mt-10 rounded-lg flex gap-5 items-center">
                    <div className="bg-white rounded-full w-[50px] h-[50px]"></div>
                    <input
                        type="text"
                        placeholder="Let’s share what going on your mind......"
                        className="w-[80%] h-12 rounded-xl placeholder:text-slate-500 placeholder:italic text-slate-700 focus:outline-none placeholder:pl-5"
                    />
                    <Button classname="bg-kuning w-36">Create Post</Button>
                </div>
                <div className="mt-10">
                    {card.map((item) => (
                        <div
                            key={item.id}
                            className="border-hijau border-2 p-3 mt-10 rounded-xl flex gap-5 relative"
                            data-aos="fade-right"
                        >
                            <img src={item.img} alt="" />
                            <div className="flex flex-col items-center ">
                                <h1 className="text-black text-lg  font-bold">{item.title}</h1>
                                <div className="flex gap-3 items-center flex-wrap mt-20">
                                    <div className="rounded-full w-8 h-8 bg-hijau"></div>
                                    <div className="flex flex-col">
                                        <span className="text-slate-900 font-bold text-sm">
                                           {item.name}
                                        </span>
                                        <span className="text-slate-900 font-semibold text-sm">
                                            28 Oktober 2024
                                        </span>
                                    </div>
                                </div>
                                <div className="flex gap-3 mt-5">
                                    <button
                                        type="button"
                                        className="text-white bg-kuning py-1 px-3 rounded-xl text-sm"
                                    >
                                        Hama
                                    </button>
                                    <button
                                        type="button"
                                        className="text-white bg-kuning py-1 px-3 rounded-xl text-sm"
                                    >
                                        Hama
                                    </button>
                                </div>
                            </div>

                            {commentFormVisible === item.id && (
                                <div className="absolute left-[25%] right-0 bg-white p-4 shadow-lg z-10 text-center">
                                    <textarea
                                        placeholder="Tulis komentar Anda..."
                                        className="w-full p-2 border rounded"
                                    />
                                    <div className="flex justify-end mt-2 items-center gap-5">
                                        <button
                                            onClick={() => setCommentFormVisible(null)}
                                            className="bg-red-500 text-white py-2 px-4 mt-2 rounded flex"
                                        >
                                            Close
                                        </button>
                                        <button
                                            onClick={() => setCommentFormVisible(null)}
                                            className="bg-blue-500 text-white py-2 px-4 mt-2 rounded flex"
                                        >
                                            Krim
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="flex gap-5 items-end ml-[30rem]">
                                <motion.button
                                    onClick={() => handleLike(item.id)}
                                    whileTap={{ scale: 1.2 }} // Animasi skala saat tombol ditekan
                                >
                                    {likes[item.id] ? (
                                        <img
                                            src="https://img.icons8.com/?size=100&id=16424&format=png&color=000000"
                                            alt="like"
                                            className="h-7 bg-hijau rounded-full"
                                        />
                                    ) : (
                                        <img
                                            src="/icons/like.png"
                                            alt="unlike"
                                            className="h-7"
                                        />
                                    )}
                                </motion.button>

                                <motion.button
                                    onClick={() => toggleCommentForm(item.id)}
                                    whileTap={{ scale: 1.2 }} // Animasi skala saat tombol ditekan
                                >
                                    <img
                                        src="/icons/komentar.png"
                                        alt="comment"
                                        className="h-7"
                                    />
                                </motion.button>

                                <motion.button
                                    whileTap={{ scale: 1.2 }} // Animasi skala saat tombol ditekan
                                >
                                    <img
                                        src="/icons/shere.png"
                                        alt="share"
                                        className="h-7"
                                    />
                                </motion.button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Forum;
