import React, { useContext } from 'react';
import { CarritoContext } from "../../CarritoContext";
import './DetalleLibro.css';

const DetalleLibro = ({ libro }) => {
    const { agregarCarrito } = useContext(CarritoContext);

    const handleAgregarCarrito = () => {
        agregarCarrito(libro);
    };

    return (
        <div className="detalleLibro">
            <img
                src={`/imagenes/${libro.imagen}`}
                alt={libro.titulo}
                className="imagenPortada"
            />
            <div className="infoLibro">
                <h2 className="tituloLibro">{libro.titulo}</h2>
                <p className="autorLibro"> {libro.autor}</p>
                <p className="descripcionLibro">{libro.descripcion}</p>
                <div className="contenedorPago">
                    <p className="precioLibro">Precio: {libro.precio}€</p>
                    <button className="carritoLibro" onClick={handleAgregarCarrito}>Añadir al carrito</button>
                </div>
            </div>
        </div>
    );
};

export default DetalleLibro;
