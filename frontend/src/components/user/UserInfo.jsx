import React from "react";
import UserBooksTable from "./UserBooksTable";

const UserInfo = ({ user }) => {

    return (
        <>
            <div className="text-center main-info">
                <h1 className='text-6xl font-bold text-center text-black'>Mauro Tramentozzi</h1>
            </div>
            <div className="text-center">
                {false ?
                    <div className="px-10 py-4 mt-10 bg-primary">
                        <p className="text-3xl text-secondary">Non ha libri da restituire</p>
                    </div>
                    :
                    <div className="px-10 py-4 mt-10 bg-actions">
                        <p className="text-3xl text-secondary">Deve restituire N libri</p>
                    </div>
                }
                <UserBooksTable />
            </div>
        </>
    );
}

export default UserInfo;