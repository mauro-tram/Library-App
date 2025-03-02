import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center content-center justify-center flex-grow w-full bg-secondary">
                <main className="content-center flex-grow">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;