import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const [carrito, setCarrito] = useState(0);
    const [libroBusqueda, setLibroBusqueda] = useState('');
    const navigate = useNavigate();

    const buscarLibro = (e) => {
        e.preventDefault(); // Evitar que el formulario recargue la página
        navigate(`/Home?search=${libroBusqueda}`);
    };

    return (
        <header className="header">
            <img src="/imagenes/logo.jpg" alt="Logo" className="logo" />

            <form className="barraBusqueda" onSubmit={buscarLibro}>
                <input
                    type="text"
                    placeholder="Buscar libros"
                    value={libroBusqueda}
                    onChange={(e) => setLibroBusqueda(e.target.value)}
                />
                <button type="submit">Buscar</button>
            </form>

            <nav className="navLinks">
                <Link to="/">Landing</Link>
                <Link to="/Home">Inicio</Link>
            </nav>

            <div className="carrito">
                <Link to="/carrito">
                    <img src="/imagenes/carrito.png" alt="Carrito" className="imagenCarrito" />
                    <span className="carritoItems">{carrito}</span>
                </Link>
            </div>
        </header>
    );
};

export default Header;
