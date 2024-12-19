import { Fragment } from "react"
import Footer from "../components/Elemets/Fragments/Footer"
import Header from "../components/Elemets/Fragments/Header"
import Navigasi from "../components/Elemets/Fragments/Navigasi"

const PenyakitBulai = () => {
    return (
        <Fragment>
            <Header>
                <Navigasi
                    dashboardText="Dashboard"
                    forumText="Forum"
                    news= "News"
                    panduanText="Panduan"
                    pengaturanText="Pengaturan"
                />
            </Header>
            <div className="container mx-auto">
                <h1 className="text-hijau w-fit text-3xl font-semibold mt-10 mb-5 border-b-2 border-hijau" data-aos="fade-down">Penyakit Bulai</h1>
                <div className="sm:grid sm:grid-cols-2 mb-10 gap-5 justify-center">
                    <img src="/img/image 12.png" alt="" data-aos="fade-right" className="" />
                    <p className="sm:text-lg text-start" data-aos="fade-left">Penyakit bulai adalah salah satu penyakit yang serius pada tanaman, terutama pada tanaman jagung. Penyakit ini disebabkan oleh infeksi jamur Peronosclerospora maydis atau Peronosclerospora sorghi. Penyakit bulai biasanya ditandai dengan munculnya warna kuning pucat atau garis-garis klorosis pada daun tanaman jagung. Jika tidak dikendalikan, penyakit ini dapat menyebabkan penurunan hasil panen yang sangat signifikan atau bahkan menyebabkan kegagalan panen.</p>
                </div>
                <h2 className="text-black text-lg  font-bold">Penyebab dan Gejala</h2>
                <div className="my-5">
                    <h3 className="text-hijau font-bold text-md ">Hawar Daun Bakteri</h3>
                    <p>
                        Disebabkan oleh bakteri seperti Xanthomonas oryzae, yang menyerang tanaman padi. Gejalanya meliputi bintik-bintik basah atau garis-garis pada daun yang akhirnya berubah menjadi kuning atau coklat tua. Infeksi ini dapat menyebar dengan cepat terutama pada kondisi kelembapan tinggi, seperti saat musim hujan.
                    </p>
                </div>
                <div className="my-5">
                    <h3 className="text-hijau font-bold text-md ">Hawar Daun Jamur</h3>
                    <p>
                        Banyak disebabkan oleh spesies jamur seperti Phytophthora infestans (pada kentang dan tomat) dan Alternaria (pada tanaman kubis). Gejala khasnya adalah bercak-bercak hitam atau coklat yang menyebar cepat di permukaan daun. Pada beberapa kasus, bercak ini dapat bergabung dan menyebabkan daun menjadi layu dan rontok.
                    </p>
                </div>
                <div className="my-5" data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500">
                    <h3 className="text-hijau font-bold text-md ">Hawar Daun Virus</h3>
                    <p>
                        Meskipun jarang, beberapa virus dapat menyebabkan hawar pada daun, ditandai dengan perubahan warna yang tidak teratur atau bercak mosaik pada daun. Virus ini sering ditularkan melalui serangga atau alat yang terkontaminasi.
                    </p>
                </div>
            </div>
            <Footer />
        </Fragment>
    )
}
export default PenyakitBulai;