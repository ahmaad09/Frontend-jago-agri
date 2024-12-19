import { Fragment, useEffect, useState } from "react";
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import { Link } from "react-router-dom";
import Footer from "../components/Elemets/Fragments/Footer";

// Fungsi untuk memotong deskripsi
const truncateDescription = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
        return words.slice(0, wordLimit).join(" ") + "..."; // Menambahkan "..." jika melebihi batas kata
    }
    return text;
};

const News = () => {
    const [cardData, setCardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch("http://localhost:3000/news");
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Data received from API:", data); // Log data
                setCardData(data.data); // array dari objek data
            } catch (error) {
                console.error("Error fetching news:", error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-10 text-red-500">Error: {error}</div>;
    }

    if (!Array.isArray(cardData)) {
        return <div className="text-center mt-10">Data tidak valid.</div>;
    }

    return (
        <Fragment>
            <Header>
                <Navigasi
                    className="sm:hidden"
                    dashboardText="Dashboard"
                    forumText="Forum"
                    panduanText="Panduan"
                    news="News"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto mb-10">
                <h1 className="text-hijau w-fit font-bold text-4xl border-b-2 border-hijau mt-12 mb-10">
                    News
                </h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cardData.map((card) => (
                        <div
                            key={card.id}
                            className="bg-hijau w-full rounded-[20px] overflow-hidden flex flex-col justify-between pt-2"
                        >
                            <img
                                src={card.image || 'path/to/placeholder-image.jpg'} // Gambar placeholder jika tidak ada
                                alt={card.title}
                                className="object-center w-full h-40 px-2"
                            />
                            <div className="mx-3 max-w-sm">
                                <h2 className="text-white font-semibold">
                                    {card.title}
                                </h2>
                                <p className="text-white/70 my-2 text-[12px]">
                                    {truncateDescription(card.description, 20)} {/* Menampilkan deskripsi terbatas 20 kata */}
                                </p>
                            </div>
                            <div className="my-5 mb-7">
                                <Link
                                    to={`/news/${card.id}`}
                                    className="text-white font-semibold text-[14px] bg-kuning rounded-full px-3 py-1 text-start w-fit mx-3 my-5"
                                >
                                    Selengkapnya
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default News;
