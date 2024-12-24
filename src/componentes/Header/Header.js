import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CarritoContext } from "../../CarritoContext";
import CarritoDesplegable from "../Carrito/CarritoDesplegable";
import "./Header.css";

const Header = () => {
    const { carrito, decrementarDelCarrito, incrementarCantidad } = useContext(CarritoContext);
    const [libroBusqueda, setLibroBusqueda] = useState('');
    const [mostrarCarrito, setMostrarCarrito] = useState(false);
    const navigate = useNavigate();

    const cantidadTotalCarrito = carrito.reduce((total, item) => total + item.cantidad, 0);

    const buscarLibro = (e) => {
        e.preventDefault(); // Evitar que el formulario recargue la página
        navigate(`/Home?busqueda=${libroBusqueda}`);
    };

    const toggleCarrito = () => {
        setMostrarCarrito(!mostrarCarrito);
    };

    const cerrarCarrito = () => {
        setMostrarCarrito(false);
    };

    const verCarritoCompleto = () => {
        setMostrarCarrito(false);
        navigate("/carrito");
    };

    return (
        <header className="header">

            <div className="logo">
                <Link to="/Home">
                    <img src="/imagenes/logo.jpg" alt="Logo" />
                </Link>
            </div>

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
                <img src="/imagenes/carrito.png" alt="Carrito" className="imagenCarrito" onClick={toggleCarrito} />
                <span className="carritoItems">{cantidadTotalCarrito} </span>
            </div>

            {mostrarCarrito && (
                <CarritoDesplegable carrito={carrito} cerrarCarrito={cerrarCarrito} verCarritoCompleto={verCarritoCompleto} incrementarCantidad={incrementarCantidad} decrementarDelCarrito={decrementarDelCarrito} />
            )}

        </header>
    );
};

export default Header;
