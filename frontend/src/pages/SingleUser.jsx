import React, { useEffect, useState } from "react";
import Button from "../components/utility/Button";
import NotFound from "../components/utility/NotFound";
import UserInfo from "../components/user/UserInfo";
import { useParams } from "react-router-dom";
import { getUserById } from "../api/userApi";

const SingleUser = () => {
    const { id } = useParams();
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = await getUserById(id);
                setUser(userData);
            } catch (error) {
                setNotFound(error.status === 404);
                console.error("single-user / Errore nel fetch:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Caricamento utente..</p>
    if (notFound) return <NotFound message="OPS! L'utente non è stato trovato" />

    return (
        <div className="user-info">
            <UserInfo user={user} />
            <Button title="Assegna" />
            <Button path="/users" title="Torna indietro" primary={false} />
        </div>
    );
};

export default SingleUser;