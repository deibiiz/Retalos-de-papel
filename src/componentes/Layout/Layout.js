import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = ({ children }) => (
    <div className="contenedorLayout">
        <Header />
        <main className="content">
            {children}
        </main>
        <Footer />
    </div>
);

export default Layout;