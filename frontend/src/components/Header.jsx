import React from "react";

const Header = () => {
    return (
        <div className="fixed top-0 flex justify-between w-full p-3 px-6 text-secondary bg-primary header">
            <h2 className="text-xl">Benvenuto, Bibliotecario!</h2>
            <span className="flex items-center gap-4">
                <p>Libri</p>
                <p>Utenti</p>
            </span>
            <p>LinkedIn</p>
        </div>
    );
};

export default Header;