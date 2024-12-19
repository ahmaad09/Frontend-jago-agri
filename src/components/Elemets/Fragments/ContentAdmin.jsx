import React, { useEffect, useState } from "react";

const Content = () => {
    const [userCount, setUser, Count] = useState(0);
    const [newsCount, setNewsCount] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userResponse = await fetch("http://localhost:3000/users");
                const newsResponse = await fetch("http://localhost:3000/news");

                if (!userResponse.ok || !newsResponse.ok) {
                    throw new Error("Error fetching data");
                }

                const users = await userResponse.json();
                const news = await newsResponse.json();

                // Pastikan data yang diterima adalah array
                setUser.Count(Array.isArray(users) ? users.length : 0);
                setNewsCount(Array.isArray(news.data) ? news.data.length : 0);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <main className="flex-1 p-6">
            <div className="grid grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-bold">Users</h2>
                    <p className="text-gray-600">{userCount} Active Users</p>
                </div>

                {/* Card 2 */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-bold">Revenue</h2>
                    <p className="text-gray-600">$12,300</p>
                </div>

                {/* Card 3 */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-bold">Reports</h2>
                    <p className="text-gray-600">5 Pending Reports</p>
                </div>

                {/* Card 4 - News Count */}
                <div className="bg-white shadow rounded-lg p-4">
                    <h2 className="text-lg font-bold">News</h2>
                    <p className="text-gray-600">{newsCount} Articles</p>
                </div>
            </div>
        </main>
    );
};

export default Content;