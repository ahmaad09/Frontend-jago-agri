import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyCalendar() {
    const [value, onChange] = useState(new Date());
    const [notes, setNotes] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentNote, setCurrentNote] = useState("");

    const apiUrl = "http://localhost:3000/notes"; // API backend

    // Fetch notes dari backend
    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const token = localStorage.getItem("token"); // Ambil token dari localStorage
                const response = await axios.get(apiUrl, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setNotes(response.data); // Simpan data notes ke state
            } catch (error) {
                console.error("Gagal memuat catatan:", error);
            }
        };
        fetchNotes();
    }, []);

    const saveNote = async () => {
        try {
            const token = localStorage.getItem("token");
            const newNote = {
                title: `Catatan untuk ${value.toLocaleDateString()}`,
                content: currentNote,
            };

            const response = await axios.post(apiUrl, newNote, {
                headers: { Authorization: `Bearer ${token}` },
            });

            setNotes([...notes, { ...newNote, id: response.data.noteId }]);
            setCurrentNote(""); // Reset input
            setIsModalOpen(false); // Tutup modal
        } catch (error) {
            console.error("Gagal menyimpan catatan:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            const token = localStorage.getItem("token");
            await axios.delete(apiUrl, {
                headers: { Authorization: `Bearer ${token}` },
                data: { id },
            });

            setNotes(notes.filter((note) => note.id !== id));
        } catch (error) {
            console.error("Gagal menghapus catatan:", error);
        }
    };

    const handleDateClick = (date) => {
        onChange(date);
        setIsModalOpen(true);
    };

    return (
        <div className=" rounded-4xl h-screen">
            <div className="flex">
                <div className="max-w-md mx-5 my-10 flex-shrink-0">
                    <h2 className="font-semibold text-hijau text-4xl border-b-2 border-hijau w-fit my-8 ">Calender</h2>
                    <div className="react-calendar-container">
                        <Calendar
                            onClickDay={handleDateClick}
                            value={value}
                            className="react-calendar rounded-lg shadow-md border border-gray-200 p-5"
                        />
                    </div>
                </div>

                <div className="ml-10 max-w-lg p-4 border border-gray-300 rounded-md shadow-sm flex-shrink-0 h-full w-full mt-36">
                    <h3 className="text-gray-700 mb-2">Catatan Tersimpan</h3>
                    {notes.length > 0 ? (
                        <table className="min-w-full border-collapse">
                            <thead>
                                <tr>
                                    <th className="border p-2 text-left">Tanggal</th>
                                    <th className="border p-2 text-left">Catatan</th>
                                    <th className="border p-2 text-left">Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                {notes.map((note) => (
                                    <tr key={note.id}>
                                        <td className="border p-2">{note.title}</td>
                                        <td className="border p-2">{note.content}</td>
                                        <td className="border p-2 text-center">
                                            <button
                                                onClick={() => deleteNote(note.id)}
                                                className="bg-red-500 text-white px-2 py-1 rounded-md"
                                            >
                                                Hapus
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p className="text-gray-500">Tidak ada catatan yang tersimpan.</p>
                    )}
                </div>

                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                            <h3 className="text-gray-700 mb-2">Tambah Catatan untuk {value.toDateString()}</h3>
                            <textarea
                                className="w-full p-2 border border-gray-300 rounded-md"
                                rows="4"
                                value={currentNote}
                                onChange={(e) => setCurrentNote(e.target.value)}
                                placeholder="Tulis catatan di sini..."
                            ></textarea>
                            <div className="mt-4 flex justify-between">
                                <button
                                    onClick={saveNote}
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                >
                                    Simpan Catatan
                                </button>
                                <button
                                    onClick={() => setIsModalOpen(false)}
                                    className="bg-gray-500 text-white px-4 py-2 rounded-md"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MyCalendar;
