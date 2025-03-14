import React, { useEffect, useState } from "react";
import BookInfo from "../components/BookInfo";
import Button from "../components/utility/Button";
import NotFound from "../components/utility/NotFound";
import { useParams } from "react-router-dom";
import { getBookById } from "../api/bookApi"

const SingleBook = () => {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookData = await getBookById(id);
                setBook(bookData);
            } catch (error) {
                console.error("single-book / Errore nel fetch:", error);
                setNotFound(error.status === 404)
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Caricamento informazioni libro..</p>
    if (notFound) return <NotFound message="OPS! Il libro non è stato trovato" />

    return (
        <div className="book-info">
            <BookInfo book={book} />
            <Button title="Consegna" isClickable={book.available} />
            <Button path="/books" title="Torna indietro" primary={false} />
        </div>
    );
};

export default SingleBook;