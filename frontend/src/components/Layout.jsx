import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;