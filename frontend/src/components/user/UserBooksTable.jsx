import React from "react";

const user = {
    id: 1,
    name: "Mauro Tramentozzi",
    loanBooks: [
        {
            id: 1,
            title: 'Io ci provo',
            author: 'Mauro Tramentozzi',
            available: false,
            qty: 0,
        }, {
            id: 2,
            title: 'Violenza sui violenti, perchè funziona',
            author: 'Poco Calmo',
            available: true,
            qty: 2,
        }, {
            id: 3,
            title: 'Il libro che non vedi',
            author: 'Franco Monterisi',
            available: true,
            qty: 10,
        }
    ]
};


const UserBooksTable = () => {
    const loanBooks = user.loanBooks;

    return (
        <div className="mx-auto mt-10 overflow-x-auto shadow-md">
            <table className="w-full text-left text-gray-500 table-fixed rtl:text-right">
                <thead className="uppercase table-auto text-secondary bg-primary">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Autore</th>
                        <th scope="col" className="px-6 py-3">Titolo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="border-b border-gray-400">
                        <td className="px-6 py-2">1</td>
                        <td className="px-6 py-2">Il libro di Tizio..</td>
                        <td className="px-6 py-2">Che hai detto?</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className="px-6 py-2">1</td>
                        <td className="px-6 py-2">Tizio</td>
                        <td className="px-6 py-2">Il libro di Tizio 2, la vendetta..</td>
                    </tr>
                    <tr className="border-b border-gray-400">
                        <td className="px-6 py-2">1</td>
                        <td className="px-6 py-2">Tizio</td>
                        <td className="px-6 py-2">Il libro di Tizio 3, il ritorno..</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserBooksTable;