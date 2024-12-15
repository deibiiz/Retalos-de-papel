import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/src/imagenes/logo.jpg" alt="Logo" />
            </div>

            <div className="barraBusqueda">
                <input type="text" placeholder="Buscar libros" />
                <button>Buscar</button>
            </div>

            <nav className="navLinks">
                <a href="/Home">Inicio</a>
                <a href="/categorias">Categorías</a>
            </nav>

            <div className="carritoIcono">
                <img src="cart-icon.png" alt="Carrito" />
                <span className="carritoItems">3</span>
            </div>

        </header>
    );
};

export default Header;