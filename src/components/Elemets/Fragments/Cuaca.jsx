import React, { useEffect, useState } from 'react';

const Cuaca = () => {
    const [city, setCity] = useState("Banda Aceh");
    const [forecastData, setForecastData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const apiKey = "704d6c9d5901c5fd4c407434b6f5dfd3"; // API Key OpenWeatherMap
        const latitude = 5.5483;
        const longitude = 95.3238;
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                // Ambil 5 data cuaca dengan jam saja
                const hourlyData = data.list.slice(0, 5).map((entry) => ({
                    time: new Date(entry.dt * 1000).toLocaleTimeString("id-ID", { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                    }), // Format hanya jam dan menit
                    temperature: entry.main.temp,
                    condition: entry.weather[0].main.toLowerCase()
                }));

                setForecastData(hourlyData);
            })
            .catch((error) => {
                console.error("Error:", error);
                setError("Could not fetch weather data. Please try again later.");
            });
    }, [city]);

    // Fungsi untuk memetakan kondisi cuaca ke ikon milik Anda
    const getIcon = (condition) => {
        const iconMapping = {
            clear: "/icons/weather/clear.png",
            rain: "/icons/weather/rain.png",
            clouds: "/icons/weather/clouds.png",
            snow: "/icons/weather/snowy.png",
            thunderstorm: "/icons/weather/thunderstorm.png",
            drizzle: "/icons/weather/drizzle.png",
            mist: "/icons/weather/mist.png"
        };
        return iconMapping[condition] || "/icons/default.png";
    };

    if (error) {
        return <div className="text-red-500">Error: {error}</div>;
    }

    return (
        <div className="flex space-x-5 mb-10">
            <div className="relative bg-hijau w-[394.87px] h-[230px] rounded-[30px] flex flex-col items-center justify-center  z-0">
                {!forecastData && (
                    <div className="absolute inset-0 flex items-center justify-center bg-hijau rounded-[30px]">
                        <div className="spinner"></div>
                    </div>
                )}
                {forecastData && (
                    <div className="flex flex-col">
                        {forecastData.map((entry, index) => (
                            <div key={index} className="flex items-center m-0">
                                <img
                                    src={getIcon(entry.condition)}
                                    alt={`Weather Icon for ${entry.condition}`}
                                    className="w-11 h-11"
                                    onError={() => console.error("Failed to load icon for condition:", entry.condition)}
                                />
                                <div className="ml-4 flex justify-between w-full">
                                    <h2 className="font-semibold text-white text-sm mr-10">{entry.temperature}°C</h2>
                                    <h5 className="font-semibold text-white text-sm">{entry.time}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cuaca;
