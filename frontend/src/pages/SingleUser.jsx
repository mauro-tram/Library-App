import React from "react";
import Button from "../components/Button";
import UserInfo from "../components/user/UserInfo";

const SingleBook = (user) => {
    return (
        <div className="user-info">
            <UserInfo user={user} />
            <Button title="Assegna" />
            <Button title="Torna indietro" primary={false} />
        </div>
    );
};

export default SingleBook;