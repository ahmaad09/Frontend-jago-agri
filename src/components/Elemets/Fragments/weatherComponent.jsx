import React, { Fragment, useEffect, useState } from "react";
import Cuaca from "./Cuaca";

const WeatherForecast = ({ city }) => {
    const [jam, setJam] = useState("");
    const [tanggal, setTanggal] = useState("");
    const kota = city || "Pliken"; // Kota default
    const [forecastData, setForecastData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        function updateJam() {
            const sekarang = new Date();
            const jam = sekarang.getHours().toString().padStart(2, "0");
            const menit = sekarang.getMinutes().toString().padStart(2, "0");
            setJam(`${jam}:${menit}`);
        }

        function updateTanggal() {
            const sekarang = new Date();
            const options = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            setTanggal(sekarang.toLocaleDateString("id-ID", options));
        }

        updateJam();
        updateTanggal();
        const interval = setInterval(() => {
            updateJam();
        }, 60000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const apiKey = "704d6c9d5901c5fd4c407434b6f5dfd3"; // API key
        const latitude = -7.429722720724673; // Latitude Desa Pliken (perkiraan Kecamatan Kembaran)
        const longitude = 109.28966331957584; // Longitude Desa Pliken (perkiraan Kecamatan Kembaran)
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;


        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                const dailyData = data.list
                    .filter((entry, index) => index % 8 === 0)
                    .slice(0, 5)
                    .map((entry) => ({
                        date: new Date(entry.dt * 1000).toLocaleDateString("id-ID", {
                            weekday: "long",
                            day: "numeric",
                            month: "short",
                        }),
                        temperature: Math.round(entry.main.temp), // Suhu bulat ke integer
                        weather: entry.weather[0].main, // Jenis cuaca utama
                    }));

                // Lengkapi data jika kurang dari 5 hari
                while (dailyData.length < 5) {
                    dailyData.push({
                        date: "Tidak ada data",
                        temperature: "--",
                        weather: "Tidak ada data",
                    });
                }

                setForecastData(dailyData);
            })
            .catch((error) => {
                console.error("Error:", error);
                setError("Tidak dapat mengambil data cuaca. Coba lagi nanti.");
            });
    }, []);

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <Fragment>
            <div className="flex space-x-5" data-aos="fade-left">
                {/* Kotak pertama */}
                <div className="bg-hijau w-[594.87px] h-[230px] rounded-[30px]">
                    <h2 className="font-semibold text-white text-3xl p-5 text-center">
                        {kota}
                    </h2>
                    <div id="jam" className="text-center text-white text-2xl mt-5">
                        <h1 className="font-bold text-[4.5rem]">{jam}</h1>
                        <h2 className="text-[16px] mt-7">{tanggal}</h2>
                        <h3 className="text-sm italic">{kota}</h3>
                    </div>
                </div>

                {/* Kotak kedua */}
                <div className="bg-hijau w-[814.18px] h-[230px] rounded-[30px] px-5 grid grid-cols-4">
                    {/* grid 1 */}
                    <div className="ml-5">
                        {forecastData && forecastData.length > 0 && (
                            <h2 className="text-white text-5xl font-bold mt-5">
                                {forecastData[0].temperature}°C
                            </h2>
                        )}
                        {forecastData && forecastData.length > 0 && (
                            <div className="flex items-center">
                                <p className="text-[#FFFFFF]/50 text-md">Feels like:</p>
                                <h2 className="text-[#FFFFFF]/50 text-xl mt-5 relative left-5 bottom-3 font-bold">
                                    {forecastData[3].temperature}°C
                                </h2>
                            </div>
                        )}
                        <div className="flex items-center mb-3">
                            <img src="./icons/sun/sunrise-white.png" alt="" className="h-8" />
                            <div>
                                <p className="text-[#FFFFFF] text-sm my-0 font-semibold">Sunrise</p>
                                <p className="text-[#FFFFFF] text-[0.7rem] my-0">06:37 AM</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img src="./icons/sun/sunset-white 1.png" alt="" className="h-8" />
                            <div>
                                <p className="text-[#FFFFFF] text-sm my-0 font-semibold">Sunset</p>
                                <p className="text-[#FFFFFF] text-[0.7rem] my-0">20:37 AM</p>
                            </div>
                        </div>
                    </div>
                    {/* grid 2 */}
                    <div className="relative  left-10">
                        {forecastData.length > 0 && (
                            <div className="flex flex-col items-center">
                                {/* <img src="/icons/icon6.png" alt="" className="w-[270px] h-[180px]" />
                                <p className="text-white font-semibold text-2xl">Sunny</p> */}
                                <WeatherDay
                                    weather={forecastData[0].weather}
                                    imgClassName="w-[750px] h-[750px]"
                                    showWeatherName={true} // nama cuaca
                                />
                            </div>
                        )}
                    </div>
                    {/* grid 3 */}
                    <div className="flex flex-col">
                        <div className="text-white flex flex-col items-center mt-5 ml-12">
                            <img src="/icons/humidity.png" alt="" className="w-12" />
                            <p className="font-semibold mb-2">41%</p>
                            <p className="font-thin text-sm">Humidity</p>
                        </div>
                        <div className="text-white flex flex-col items-center mt-5 ml-12">
                            <img src="/icons/pressure-white.png" alt="" className="w-12" />
                            <p className="font-semibold mb-2">997hPa</p>
                            <p className="font-thin text-sm">pressure</p>
                        </div>
                    </div>
                    {/* grid 4 */}
                    <div className="flex flex-col">
                        <div className="text-white flex flex-col items-center mt-5 ml-5">
                            <img src="/icons/wind.png" alt="" className="w-12" />
                            <p className="font-semibold mb-2">2km/h</p>
                            <p className="font-thin text-sm">Wind Speed</p>
                        </div>
                        <div className="text-white flex flex-col items-center mt-5 ml-5">
                            <img src="/icons/uv-white.png" alt="" className="w-12" />
                            <p className="font-semibold mb-2">8</p>
                            <p className="font-thin text-sm">UV</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-5" data-aos="fade-left">
                {/* Kotak ketiga */}
                <Cuaca />
                {/* Kotak keempat */}
                <div className="bg-hijau w-[814.18px] h-[230px] rounded-[30px] grid grid-cols-5 justify-center items-center px-5">
                    {forecastData.map((day, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-b from-[#E5AD23] to-[#00583B] rounded-[32.06px] w-[100px] h-[200px] flex flex-col items-center justify-center"
                        >
                            <WeatherDay
                                temperature={day.temperature}
                                date={day.date}
                                weather={day.weather}
                            />
                            <img src="/img/navigasi/navigation1.png" alt="" className="w-12" />
                        </div>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};


const WeatherDay = ({ temperature, date, weather, imgClassName, showWeatherName }) => {
    const weatherIcons = {
        Clear: "/icons/weather/clear.png",
        Rain: "/icons/weather/rain.png",
        Clouds: "/icons/weather/clouds.png",
        Snow: "/icons/weather/snowy.png",
        Thunderstorm: "/icons/weather/thunderstorm.png",
        Drizzle: "/icons/weather/drizzle.png",
        Mist: "/icons/weather/mist.png",
        "Tidak ada data": "/icons/weather/default.png", // Ikon default
    };

    const weatherName = weather || "Tidak ada data";

    const weatherIcon = weatherIcons[weather] || "/icons/weather/default.png"; // Default jika tidak ada match

    return (
        <div className="flex flex-col items-center justify-center w-[100px] h-[200px]">
            <img
                src={weatherIcon}
                alt={`Weather Icon for ${weatherName}`}
                className={`w-[2.8rem] h-[2.8rem] mt-3 ${imgClassName}`}
            />
            {showWeatherName && (
                <h3 className="text-white text-2xl font-semibold  mt-2 relative">{weatherName}</h3> // Menampilkan nama cuaca hanya jika showWeatherName = true
            )}
            <h2 className="text-white text-2xl font-bold mt-3">{temperature}</h2>
            <h5 className="text-white text-sm">{date}</h5>
        </div>
    );
};

export default WeatherForecast;
