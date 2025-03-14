import BooksTableRaw from "./BooksTableRaw";

const BooksTable = ({ books }) => {

    return (
        <div className="mx-auto mt-10 overflow-x-auto shadow-md">
            <table className="w-full text-left text-gray-500 table-fixed rtl:text-right">
                <thead className="uppercase table-auto text-secondary bg-primary">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Autore</th>
                        <th scope="col" className="px-6 py-3">Titolo</th>
                        <th scope="col" className="px-6 py-3">Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books.map(function (book, i) {
                            return <BooksTableRaw book={book} key={i} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default BooksTable;