import React from "react";

const BookInfo = ({ book }) => {

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
        </>
    );
}

export default BookInfo;