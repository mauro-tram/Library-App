import { Link } from "react-router-dom";

const BooksTableRaw = ({ book }) => {
    const bookPath = "/books/" + book.id;

    return (
        <tr className="border-b border-gray-400">
            <td className="px-6 py-2">{book.id}</td>
            <td className="px-6 py-2">{book.author}</td>
            <td className="px-6 py-2">{book.title}</td>
            <td className="px-6 py-2">
                <Link to={bookPath}>
                    <p className="text-actions hover:text-gray-600">Visualizza</p>
                </Link>
            </td>
        </tr>
    );
}

export default BooksTableRaw