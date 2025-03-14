import React, { useEffect, useState } from "react";
import UsersTable from "../user/UsersTable";
import { useParams } from "react-router-dom";
import { getUsersByBookId } from "../../api/bookApi";

const BookInfo = ({ book }) => {
    const [bookUsers, setBookUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const availabilityReport = (bookQty) => {
        let string = "Disponibili: ";
        if (bookQty == 1) {
            string += bookQty + " copia";
        } else {
            string += bookQty + " copie";
        }

        return (
            <p className="text-center mt-5 text-[#989898]">{string}</p>
        );
    };

    const usersTable = (users) => {
        if (loading) return <p>Caricamento utenti in possesso del libro..</p>

        if (users.length > 0) {
            return (
                <div className="book-users">
                    <UsersTable users={users} />
                </div>
            );
        } else {
            return (
                <div className="mx-auto mt-10 text-center text-actions">
                    <p>Nessun utente al momento ha preso in prestito questo libro.</p>
                </div>
            );
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const bookUsers = await getUsersByBookId(id);
                setBookUsers(bookUsers);
            } catch (error) {
                console.error("single-book-users / Errore nella ricerca degli utenti:", error);
                throw error;
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <div className="text-center main-info">
                <h1 className='text-6xl font-bold text-center text-black'>{book.title}</h1>
                <p className='tracking-[0.15rem] text-center text-lg text-[#989898] mt-4'>{book.author}</p>
            </div>
            <div className="text-center">
                {book.available ?
                    <div className="px-10 py-4 mt-10 bg-primary">
                        <p className="text-3xl text-secondary">Il libro è disponibile</p>
                    </div>
                    :
                    <div className="px-10 py-4 mt-10 bg-actions">
                        <p className="text-3xl text-secondary">Il libro non é disponibile</p>
                    </div>
                }
                {availabilityReport(book.qty)}
            </div>
            {usersTable(bookUsers)}
        </>
    );
}

export default BookInfo;