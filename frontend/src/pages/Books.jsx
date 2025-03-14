import React, { useEffect, useState } from "react";
import BooksTable from "../components/book/BooksTable";
import { getAllBooks } from "../api/bookApi";

const Books = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const booksData = await getAllBooks();
                setBooks(booksData);
            } catch (error) {
                console.error("books / Errore nel fetch:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className='text-6xl font-bold text-center text-black'>LIBRI</h1>
            <div className='text-center text-sm text-[#989898] mt-8'>
                <p>
                    Qui puoi trovare tutti i libri della biblioteca<br />
                    Clicca su <span className="text-actions">"Visualizza"</span> per entrare nella scheda del libro<br />
                </p>
            </div>
            <BooksTable books={books} />
        </div>
    );
}

export default Books;