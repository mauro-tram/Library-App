import React, { use, useEffect, useState } from "react";
import UsersTable from "../components/user/UsersTable";
import { getAllUsers } from "../api/userApi";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usersData = await getAllUsers();
                setUsers(usersData);
            } catch (error) {
                console.error("users / Errore nel fetch:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1 className='text-6xl font-bold text-center text-black'>UTENTI</h1>
            <div className='text-center text-sm text-[#989898] mt-8'>
                <p>
                    Qui puoi trovare tutti gli utenti registrati<br />
                    Clicca su <span className="text-actions">"Visualizza"</span> per entrare nella scheda del singolo utente<br />
                    e visualizzare i libri presi in prestito.<br />
                </p>
            </div>
            <UsersTable users={users} />
        </div>
    );
}

export default Users;