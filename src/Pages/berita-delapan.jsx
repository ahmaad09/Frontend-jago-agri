import { Fragment, useEffect, useState } from "react";
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import { Link } from "react-router-dom";
import Footer from "../components/Elemets/Fragments/Footer";
import BeritaDelapan from "../components/Elemets/Berita/Berita-delapan";

const Berita = () => {
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

    // Filter ID >= 2 dan ambil hanya 5 card pertama
    const newsToShow = cardData
        .filter((card) => card.id >= 19) // Filter hanya ID >= 2
        .slice(0, 4); // Batasi hasil ke 5 card

    return (
        <Fragment>
             <Header>
                <Navigasi className="sm:hidden"
                    dashboardText="Dashboard"
                    forumText="Forum"
                    panduanText="Panduan"
                    news = "News"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto mb-10">
                <h1 className="text-hijau w-fit font-bold text-4xl border-b-2 border-hijau mt-12 mb-10">
                    News Jagoagri
                </h1>
                <div className="grid grid-cols-2 gap-10 space-x-32">
                    <BeritaDelapan />
                    <div className="flex flex-col w-72 bg-hijau rounded-lg">
                        {newsToShow.map((card) => (
                            <div
                                key={card.id}
                                className="bg-hijau w-full rounded-[20px] overflow-hidden flex flex-col"
                            >
                                <img
                                    src={card.image || 'path/to/placeholder-image.jpg'}
                                    alt={card.title}
                                    className="object-cover w-full h-auto p-2"
                                />
                                <div className="mx-3 my-2">
                                    <h2 className="text-white font-semibold">
                                        {card.title}
                                    </h2>
                                </div>
                                <div className="mt-auto mb-5">
                                    <Link
                                        to={`/news/${card.id}`}
                                        className="text-white font-semibold text-[14px] bg-kuning rounded-full px-3 py-1 w-fit mx-3"
                                    >
                                        Selengkapnya
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </Fragment>
    );
};

export default Berita;
