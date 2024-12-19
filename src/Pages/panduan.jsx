import { Fragment } from "react";
import Footer from "../components/Elemets/Fragments/Footer";
import Header from "../components/Elemets/Fragments/Header";
import Navigasi from "../components/Elemets/Fragments/Navigasi";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Panduan = () => {
    const Card = ({ imageUrl, text, classname }) => {
        return (
            <div className={`${classname} container mx-auto`}>
                <div className="flex gap-4 items-center">
                    <div className="" data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000">
                        <img
                            src={imageUrl}
                            alt="Gambar Panduan"
                            className="rounded object-cover  h-auto aspect-video"

                        />
                    </div>
                    <div className="bg-[#868686] rounded-lg p-4 text-white w-full"
                    data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                        <p className="">{text}</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <Fragment>
            <Header>
                <Navigasi
                    dashboardText="Dashboard"
                    forumText="Forum"
                    news = "News"
                    panduanText="Panduan"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <main className="mx-14 my-16">
                <h1 className="text-3xl text-hijau font-bold w-fit border-b-2 border-hijau">
                    Panduan
                </h1>
                <div className="container mx-auto mt-10 bg-hijau w-full rounded p-6 ">
                    <Card
                        imageUrl="/img/image 19.png"
                        text="Logo dan Nama Aplikasi: Di sebelah kiri terdapat logo berbentuk ikon padi berwarna kuning yang melambangkan pertanian, dan di bawahnya tertulis 'JagoAgri' sebagai nama aplikasi. Formulir Masuk: Di sebelah kanan, terdapat formulir masuk dengan latar belakang hijau. Formulir ini berisi: Username dan Password: Dua kolom input bagi pengguna untuk memasukkan nama pengguna (username) dan kata sandi (password). Forgot Password?: Tautan untuk mengatur ulang kata sandi jika pengguna lupa kata sandinya. Tombol Sign In: Tombol berwarna hijau terang dengan tulisan 'Sign In' untuk masuk ke dalam aplikasi. Tautan Daftar: Di bagian bawah formulir masuk, terdapat teks 'Don’t have an account? Sign Up' yang memungkinkan pengguna baru untuk mendaftar jika mereka belum memiliki akun."
                        classname="my-5"
                    />
                    <Card imageUrl={"/img/image 20.png"} text={"Gambar dan Nama Penyakit/Hama: Di bawah judul, terdapat lima gambar dengan nama-nama berikut: Hawar Daun: Menampilkan gambar daun yang tampak terkena penyakit hawar, dengan tepi gambar biru, mungkin menunjukkan bahwa ini adalah item yang sedang dipilih atau disorot. Penyakit Bulai: Gambar daun dengan gejala penyakit bulai. Busuk Batang: Gambar batang yang terlihat membusuk, menunjukkan infeksi atau penyakit pada batang. Ulat Grayak: Gambar daun yang terkena ulat grayak, yang dapat merusak daun tanaman. Penggerek Batang: Gambar batang yang terkena serangan penggerek, menyebabkan kerusakan pada batang tanaman."}
                        classname={"my-5"} />
                    <Card imageUrl={"/img/Subtract.png"} text={"Waktu dan Lokasi: Athens: Nama lokasi yang sedang dipantau, mungkin dapat disesuaikan untuk berbagai lokasi. 09:03: Menampilkan waktu saat ini di lokasi tersebut. Tanggal dan Hari: Tercantum 'Sabtu, 21 September 2024' dan 'Kota Semarang,' menunjukkan tanggal dan hari serta lokasi pengguna. Informasi Cuaca Terkini: 24°C: Suhu saat ini, dengan teks Feels like (terasa seperti) 22°C. Sunny: Kondisi cuaca yang cerah. Ikon Matahari: Menunjukkan cuaca cerah. Detail Cuaca Lainnya: Sunrise & Sunset: Menampilkan waktu matahari terbit (05:47 AM) dan terbenam (06:13 PM). Wind Speed: Kecepatan angin (4 km/h). Humidity: Kelembaban udara (61%). Pressure: Tekanan udara (1030 hPa). UV: Indeks radiasi UV (Level rendah). Prakiraan Cuaca Harian: Menampilkan ramalan cuaca untuk beberapa hari ke depan (contoh: Jumat, Sabtu, Minggu, Senin) dengan ikon cuaca, suhu minimum dan maksimum, serta kondisi cuaca (berawan, hujan, cerah). Prakiraan Cuaca Jam per Jam: Menampilkan cuaca dalam interval waktu tertentu (12:00, 15:00, 18:00, 21:00, 00:00) dengan ikon cuaca, suhu, dan kecepatan angin untuk setiap waktu."} />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Panduan;
