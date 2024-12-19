import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1000, 
            once: false 
        });
    }, []);

    const cardPenyakit = [
        {
            id: 1,
            title: "Hawar Daun",
            imgURL: "/img/image 1.png",
            link: "/hawarDaun", // link khusus untuk setiap card
        },
        {
            id: 2,
            title: "Penyakit Bulai",
            imgURL: "/img/image 3.png",
            link: "/penyakitBulai",
        },
        {
            id: 3,
            title: "Busuk Batang",
            imgURL: "/img/image 4.png",
            link: "/penyakit/busuk-batang",
        },
        {
            id: 4,
            title: "Ulat Grayak",
            imgURL: "/img/image 5.png",
            link: "/penyakit/ulat-grayak",
        },
        {
            id: 5,
            title: "Pengerek Batang",
            imgURL: "/img/image 2.png",
            link: "",
        },
    ];

    return (
        <div className="container mx-auto flex space-x-5">
            {
                cardPenyakit.map((card) => (
                    <Link to={card.link} key={card.id} className="flex flex-col items-center hover:cursor-pointer" data-aos="fade-right">
                        <div className="bg-hijau rounded-2xl flex p-4">
                            <img src={card.imgURL} alt={card.title} className="object-fill" height={"80px"} />
                        </div>
                        <div className="flex flex-col mt-10 justify-center items-center">
                            <div className="bg-hijau rounded-full text-white font-bold text-xl text-center p-2">
                                <h5>{card.title}</h5>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    );
};

export default Cards;
