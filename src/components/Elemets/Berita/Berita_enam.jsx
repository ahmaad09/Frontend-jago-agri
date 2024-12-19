import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BeritaEnam = () => {
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

    // Filter hanya ID === 12
    const newsToShow = cardData.filter((card) => card.id === 15);

    return (
        <Fragment>
            <div className="container mx-auto mb-10">
                <div className="w-[39rem]">
                    {newsToShow.map((card) => (
                        <div
                            key={card.id}
                            className="bg-hijau w-full rounded-[20px] overflow-hidden flex flex-col pt-2"
                        >
                            <img
                                src={card.image || 'path/to/placeholder-image.jpg'} // Gambar placeholder jika tidak ada
                                alt={card.title}
                                className="object-center w-full px-2"
                            />
                            <div className="mx-3 max-w-lg">
                                <h2 className="text-white font-semibold">
                                    {card.title}
                                </h2>
                                <p className="text-white/70 my-2 text-[12px]">
                                    {card.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default BeritaEnam;
