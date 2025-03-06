import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div className="flex flex-col items-center content-center justify-center flex-grow w-full bg-secondary">
                <main className="container content-center flex-grow lg:max-w-5/12 max-w-9/12">
                    {children}
                </main>
            </div>
            <Footer />
        </>
    );
};

export default Layout;