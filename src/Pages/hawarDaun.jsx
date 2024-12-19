import { Fragment } from "react"
import Header from "../components/Elemets/Fragments/Header"
import Navigasi from "../components/Elemets/Fragments/Navigasi"
import Footer from "../components/Elemets/Fragments/Footer"
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const HawarDaun = () => {
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
                <h1 className="text-hijau w-fit text-3xl font-semibold mt-10 mb-5 border-b-2 border-hijau" data-aos="fade-down">Hawar Daun</h1>
                <div className="sm:grid sm:grid-cols-2 mb-10 gap-5 justify-center">
                    <img src="/img/image 9.png" alt="" data-aos="fade-right" className="" />
                    <p className="sm:text-lg text-start" data-aos="fade-left">Hawar daun adalah penyakit tanaman yang umumnya menyerang daun dan disebabkan oleh bakteri, jamur, atau organisme patogen lainnya. Penyakit ini bisa menyebabkan kerusakan serius pada tanaman dan menurunkan kualitas serta hasil panen. Salah satu jenis hawar daun yang paling dikenal adalah yang disebabkan oleh bakteri Xanthomonas oryzae, yang menyerang tanaman padi dan dikenal sebagai hawar daun bakteri (bacterial leaf blight). Namun, hawar daun juga bisa disebabkan oleh jamur, seperti Phytophthora infestans pada kentang dan tomat.</p>
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

export default HawarDaun