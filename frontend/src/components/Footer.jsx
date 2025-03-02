import React from "react";

const Footer = () => {
    return (
        <div className="fixed bottom-0 flex justify-between w-full p-4 mt-auto text-secondary bg-primary footer">
            <a href="http://localhost:3000">Library App</a>
            <p className="text-center">&copy; 2025 Mauro Tramentozzi. Tutti i diritti riservati.</p>
        </div>
    );
};

export default Footer;