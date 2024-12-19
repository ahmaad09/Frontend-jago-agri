import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
    const [news, setNews] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [currentId, setCurrentId] = useState(null);

    // Fetch berita dari server saat komponen dimuat
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get('http://localhost:3000/news');
                setNews(response.data.data);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    // Tambah atau Edit berita
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newsData = { title, description, image };

        if (isEditing) {
            // Update berita yang ada
            try {
                await axios.put(`http://localhost:3000/news/${currentId}`, newsData);
                alert('Berita berhasil diperbarui!');
                setNews(news.map(item => (item.id === currentId ? { ...item, ...newsData } : item)));
                setIsEditing(false);
                setCurrentId(null);
            } catch (error) {
                console.error('Error updating news:', error);
                alert('Gagal memperbarui berita.');
            }
        } else {
            // Tambahkan berita baru
            try {
                const response = await axios.post('http://localhost:3000/news', newsData);
                alert('Berita berhasil ditambahkan!');
                setNews([...news, response.data.data]);
            } catch (error) {
                console.error('Error adding news:', error);
                alert('Gagal menambahkan berita.');
            }
        }

        // Reset form
        setTitle('');
        setDescription('');
        setImage('');
    };

    // Hapus berita berdasarkan ID
    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/news/${id}`);
            alert('Berita berhasil dihapus!');
            setNews(news.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error deleting news:', error);
            alert('Gagal menghapus berita.');
        }
    };

    // Edit berita
    const handleEdit = (id) => {
        const newsToEdit = news.find((item) => item.id === id);
        if (newsToEdit) {
            setTitle(newsToEdit.title);
            setDescription(newsToEdit.description);
            setImage(newsToEdit.image);
            setIsEditing(true);
            setCurrentId(id);
        }
    };

    return (
        <div className="container mx-auto p-4 absolute w-[80%] right-6 top-16">
            <h1 className="text-2xl font-bold mb-4">
                {isEditing ? 'Edit Berita' : 'Tambah Berita Baru'}
            </h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Judul</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Deskripsi</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">URL Gambar</label>
                    <input
                        type="text"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md p-2"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`px-4 py-2 rounded ${isEditing ? 'bg-green-500' : 'bg-blue-500'} text-white`}
                >
                    {isEditing ? 'Perbarui Berita' : 'Tambah Berita'}
                </button>
            </form>

            <h1 className="text-2xl font-bold mb-4 mt-28">Daftar Berita</h1>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Judul</th>
                        <th className="border border-gray-300 p-2">Deskripsi</th>
                        <th className="border border-gray-300 p-2">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {news.map((item) => (
                        <tr key={item.id}>
                            <td className="border border-gray-300 p-2">{item.id}</td>
                            <td className="border border-gray-300 p-2">{item.title}</td>
                            <td className="border border-gray-300 p-2">{item.description}</td>
                            <td className="border border-gray-300 p-2 space-x-2">
                                <button
                                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleEdit(item.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                    onClick={() => handleDelete(item.id)}
                                >
                                    Hapus
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;
