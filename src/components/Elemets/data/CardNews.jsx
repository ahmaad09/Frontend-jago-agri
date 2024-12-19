import { Fragment } from "react";
import { Link } from "react-router-dom";

// Card News
const CardNews = () => {
    const newsData = [
        {
            id: 1,
            title: "Tinjau Panen Jagung di Sumbawa, Jokowi: Harga Turun ke Rp 4.200",
            img: "/img/news/6.png",
            date: "2 MEI 2024",
            desc: "Menurutnya, panen jagung besar-besaran akan menciptakan produksi yang lebih besar dari kebutuhan pasar (demand) sehingga berdampak pada penurunan harga jagung. Ia mengatakan, saat ini harga jagung turun drastis dari Rp 7.000 menjadi Rp 4.200.",
            link : "/news/10"
        },
        {
            id: 2,
            title: "Keren! Petani Arosbaya ini panen jagungnya dengan bantuan mesin combine harvester",
            img: "/img/news/23.png",
            date: "23 NOVEMBER 2024",
            desc: "Hadir dalam kegiatan panen jagung ini Kasubag protokol Pemkab Bangkalan, Dinas pertanian dan Penyuluh Pertanian, Muspika kecamatan Arosbaya, kelompok tani dan masyarakat yang ingin menyaksikan langsung untuk pertama kalinya panen jagung menggunakan combine harvester tipe GCH102",
            link : "/news/11"
        },
        {
            id: 3,
            title: "Petani di Lebak Memanfaatkan Drone untuk Mengairi Lahan Pertanian Jagung",
            img: "/img/news/22.png",
            date: "3 AGUSTUS 2024",
            desc: "Impor jagung tahun ini diperkirakan hanya 3 juta ton, turun dari prediksi awal 3,5–3,6 juta ton. Produksi lokal meningkat, didorong harga jagung naik dari Rp 2.800/kg (2013) menjadi Rp 3.400–Rp 3.500/kg, memotivasi petani. Meski produksi menurun di akhir tahun, kebutuhan masih sebagian besar terpenuhi.",
            link : "/news/12"
        },
        {
            id: 4,
            title: "Bapanas mengimbau kepada semua pihak untuk memaksimalkan penyerapan produksi jagung dalam negeri.",
            img: "/img/news/9.png",
            date: "18 MEI 2024",
            desc: "Badan Pangan Nasional (Bapanas) telah menaikkan harga acuan pembelian (HAP) jagung di tingkat petani dari Rp 4.800 menjadi Rp 5.000 per kilogram (Kg).",
            link : "/news/13"
        },
        {
            id: 5,
            title: "Polres Batu Gandeng Dinas Pertanian Aktifkan Lahan Tidur Wujudkan Ketahanan Pangan",
            img: "/img/news/10.png",
            date: "12 November 2024",
            desc: "Lahan tidur seluas 10 hektar di Dusun Dresel Desa Oro-oro Ombo, Kota Batu dilakukan pengaktifan oleh Polres Batu dan Dinas Pertanian dan Ketahanan Pangan (Dispangtan) Kota Batu untuk pertanian. Inisiasi tersebut dilakukan untuk mendukung ketahanan pangan.",
            link : "/news/14"
        },
    ];

    return (
        <Fragment>
            <div className="flex justify-between w-full items-center">
                <h1 className="mx-5 font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-6">
                    News JagoAgri
                </h1>
                <Link to="/news" className="text-black font-semibold">
                    Berita Lainnya
                </Link>
            </div>
            <p className="text-black w-1/2 mb-5">
                Ayo baca berita mengenai Pangan Indonesia, serta kegiatan JagoAgri. Berita-berita ini tentunya selalu up to date! Klik berita lainnya untuk menampilkan semua berita.
            </p>
            <div className="flex flex-col gap-5">
                {newsData.map((item) => (
                    <div
                        key={item.id}
                        className="flex gap-5 items-start border-b pb-5"
                    >
                        <div className="bg-hijau w-60 h-40 rounded-xl flex items-center">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-xl p-2"
                            />
                        </div>

                        {/* Konten Teks */}
                        <div className="flex-1">
                            <h2 className="font-semibold text-black text-lg">
                                {item.title}
                            </h2>
                            <span className="italic text-sm text-gray-600">
                                {item.date}
                            </span>
                            <p className="mt-2 text-sm text-black">
                                {item.desc}
                            </p>
                            <Link
                                to={item.link}
                                className="bg-hijau text-white py-1 px-3 rounded-xl mt-2 inline-block text-sm font-medium hover:bg-green-700"
                            >
                                Selengkapnya
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Fragment>
    );
};

export default CardNews;
