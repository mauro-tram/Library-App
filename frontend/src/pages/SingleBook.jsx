import React from "react";
import BookInfo from "../components/BookInfo";
import Button from "../components/Button";

const book = {
    id: 1,
    title: 'Io ci provo',
    author: 'Mauro Tramentozzi',
    available: false,
    qty: 4,
};

const SingleBook = () => {
    return (
        <div className="book-info">
            <BookInfo book={book} />
            <Button title="Consegna" isClickable={book.available} />
            <Button title="Torna indietro" primary={false} />
        </div>
    );
};

export default SingleBook;