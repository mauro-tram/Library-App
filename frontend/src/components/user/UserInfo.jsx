import React from "react";
import BooksTable from "../books/BooksTable";

const UserInfo = ({ user }) => {
    let loanBooks = user.loanBooks;

    function countLoanBooks(loanBooks) {
        let string = loanBooks + " ";
        switch (loanBooks) {
            case 1:
                string += "libro";
                break;
            default:
                string += "libri";
        }
        return string;
    }

    return (
        <>
            <div className="text-center main-info">
                <h1 className='text-6xl font-bold text-center text-black'>{user.name}</h1>
            </div>
            <div className="text-center">
                {user.loanBooks.length === 0 ?
                    <div className="px-10 py-4 mt-10 bg-primary">
                        <p className="text-3xl text-secondary">Non ha libri da restituire</p>
                    </div>
                    :
                    <div className="mt-10">
                        <p className="px-10 py-4 text-3xl bg-actions text-secondary">Deve restituire {countLoanBooks(loanBooks.length)}</p>
                        <BooksTable books={user.loanBooks} />
                    </div>
                }
            </div>
        </>
    );
}

export default UserInfo;