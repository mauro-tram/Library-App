import React from "react";

const Header = () => {
    return (
        <div className="fixed top-0 flex justify-between w-full p-3 px-6 text-xl text-secondary bg-primary header">
            <h2>Benvenuto, Bibliotecario!</h2>
            <span className="flex items-center gap-4">
                <p>Utenti</p>
                <p>Libri</p>
            </span>
            <a href="https://www.linkedin.com/in/mauro-tramentozzi-developer">LinkedIn</a>
        </div>
    );
};

export default Header;