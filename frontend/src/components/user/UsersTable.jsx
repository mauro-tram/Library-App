import React from "react";
import UsersTableRaw from "./UsersTableRaw";

const UsersTable = ({ users }) => {

    return (
        <div className="mx-auto mt-10 overflow-x-auto shadow-md">
            <table className="w-full text-lg text-left text-gray-500 table-fixed rtl:text-right">
                <thead className="uppercase table-auto text-secondary bg-primary">
                    <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Nome</th>
                        <th scope="col" className="px-6 py-3">Libri in prestito:</th>
                        <th scope="col" className="px-6 py-3">Info</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(function (user, i) {
                            return <UsersTableRaw user={user} key={i} />;
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default UsersTable;