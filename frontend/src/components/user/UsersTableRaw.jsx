import { Link } from "react-router-dom";

const UsersTableRaw = ({ user }) => {
    const userPath = "/users/" + user.id;

    return (
        <tr className="border-b border-gray-400">
            <td className="px-6 py-2">{user.id || ""}</td>
            <td className="px-6 py-2">{user.name || ""}</td>
            <td className="px-6 py-2">{user.loanBooks.length}</td>
            <td className="px-6 py-2">
                <Link to={userPath}>
                    <p className="text-actions hover:text-gray-600">Visualizza</p>
                </Link>
            </td>
        </tr>
    );
}

export default UsersTableRaw