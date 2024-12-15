import React from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header/Header";

const PaginaMain = () => {
    return (
    <div>
        <Header />
        <h1>Esta es la página principal</h1>
        <Link to="/libro/1">Ir al libro 1</Link>
    </div>
    );
};

export default PaginaMain;