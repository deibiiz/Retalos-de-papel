import React from "react";
import { Link } from "react-router-dom";
import "./CarritoDesplegable.css";

const CarritoDesplegable = ({ carrito, cerrarCarrito, verCarritoCompleto, decrementarDelCarrito, incrementarCantidad }) => {
    return (
        <div className="carritoModal">
            <div className="carritoContenido">
                <button className="cerrarCarrito" onClick={cerrarCarrito}>
                    &times;
                </button>
                <h2>Tu Carrito</h2>
                {carrito.length > 0 ? (
                    <ul>
                        {carrito.map((item) => (
                            <li>
                                <div className="detalleCarritoItem">
                                    <span>{item.titulo}:</span>
                                    <span>{item.precio}€</span>
                                    <div className="botonesCarrito">
                                        <button className="botonIncrementar" onClick={() => incrementarCantidad(item.id)}>+</button>
                                        <span>{item.cantidad}</span>
                                        <button className="botonDecrementar" onClick={() => decrementarDelCarrito(item.id)}>-</button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>El carrito está vacío.</p>
                )}
                <Link to="/carrito" className="verCarritoCompleto" onClick={verCarritoCompleto}>
                    Ver carrito completo
                </Link>
            </div>
        </div>
    );
};

export default CarritoDesplegable;
