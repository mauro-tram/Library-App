import React from "react";

const Header = () => {
    return (
        <div className="flex justify-center w-full p-8 text-white bg-red-400 header">
            <h2 clasName="text-xl">Benvenuto, Bibliotecario!</h2>
            <span>
                <p>Libri</p>
                <p>Utenti</p>
            </span>
            <p>LinkedIn</p>
        </div>
    );
};

export default Header;