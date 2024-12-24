import React from "react";
import "./ResumenCarrito.css";

const ResumenCarrito = ({ item }) => (
    <div className="carritoItem">
        <img src={`/imagenes/${item.imagen}`} alt={item.titulo} />
        <div className="carritoData">
            <h3>{item.titulo}</h3>
            <p>Precio: {item.precio}€</p>
            <p>Cantidad: {item.cantidad}</p>
        </div>
    </div>
);

export default ResumenCarrito;
