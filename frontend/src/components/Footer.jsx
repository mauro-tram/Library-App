import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex justify-between w-full p-4 mt-auto text-secondary bg-primary footer">
            <Link to={"/"}>
                <p>Library App</p>
            </Link>
            <p className="text-center">&copy; 2025 Mauro Tramentozzi. Tutti i diritti riservati.</p>
        </footer>
    );
};

export default Footer;