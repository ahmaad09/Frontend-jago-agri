import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-hijau">
            <div className="container mx-auto py-10">
                <div className="flex  gap-x-20 justify-center">
                    {/* logo */}
                    <div className="flex flex-col gap-5  p-5 w-1/2">
                        <div className="flex items-center">
                            <img src="/logo2.svg" alt="" width={"80px"} />
                            <p className="text-xl font-bold text-white">JagoAgri</p>
                        </div>
                        <p className="text-white/60">JagoAgri adalah Platform web dan mobile yang membantu meningkatkan pengetahuan dan keterampilan petani jagung dalam memahami masalah yang dihadapi sebelumnya melalui solusi digital yang mudah diakses untuk meningkatkan hasil pertanian secara berkelanjutan.</p>
                    </div>
                    {/* Social Media */}
                    <div className="flex flex-col gap-5 mt-10">
                        <h2 className="text-xl font-bold text-white">Social Media</h2>
                        <Link to="https://www.facebook.com/jagoagri/" className="flex gap-3 items-center">
                            <img src="/icons/sosial-media/facebook 1.png" alt="" width={"45px"} className="" />
                            <div className="flex flex-col text-white p-0 text-sm">
                                <p className="font-semibold">Facebook</p>
                                <p className="text-white/60">@JagoAgri</p>
                            </div>
                        </Link>
                        <Link to="https://www.instagram.com/jagoagri/" className="flex gap-3 items-center">
                            <img src="/icons/sosial-media/instagram 1.png" alt="" width={"45px"} />
                            <div className="flex flex-col text-white p-0 text-sm">
                                <p className="font-semibold">instagram</p>
                                <p className="text-white/60">@JagoAgri</p>
                            </div>
                        </Link>
                    </div>
                    {/* Kontak Kami */}
                    <div className="flex flex-col gap-5 mt-10">
                        <h2 className="text-xl font-bold text-white">Kontak Kami</h2>
                        <Link to="https://www.jagoagri.com/" className="flex gap-3 items-center">
                            <img src="/icons/kontak/home 1.png" alt="" width={"45px"} />
                            <div className="flex flex-col text-white p-0 text-sm">
                                <p className="font-semibold">WEBSITE</p>
                                <p className="text-white/60">www.jagoagri.com</p>
                            </div>
                        </Link>
                        <Link to="jagoagri@gmail.com" className="flex gap-3 items-center">
                            <img src="/icons/kontak/email 1.png" alt="" width={"45px"} />
                            <div className="flex flex-col text-white p-0 text-sm">
                                <p className="font-semibold">EMAIL</p>
                                <p className="text-white/60">jagoagri@gmail.com</p>
                            </div>
                        </Link>
                        <Link to="https://wa.me/628123456789" className="flex gap-3 items-center">
                            <img src="/icons/kontak/phone-call 1.png" alt="" width={"45px"} />
                            <div className="flex flex-col text-white p-0 text-sm">
                                <p className="font-semibold">PHONE</p>
                                <p className="text-white/60">+628123456789</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            <p className="text-center text-white pb-5">JagoAgri2024&#174;</p>
        </div>

    )
}
export default Footer;