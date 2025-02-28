import { PageSize } from "./styled.module";
import { ScrollRestoration } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import React from "react";

interface PageEnveloperProps {
    children: React.ReactNode;
}

const PageEnveloper: React.FC<PageEnveloperProps> = ({ children }) => {
    return (
        <div>
            <ScrollRestoration />
            <Navbar />
            <PageSize>
                {children}
            </PageSize>
            <Footer />
        </div>
    );
};

export default PageEnveloper;