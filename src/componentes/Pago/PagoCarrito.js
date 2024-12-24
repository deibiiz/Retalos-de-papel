import React from "react";
import "./PagoCarrito.css";

const PagoCarrito = ({ total, realizarPago }) => (
    <div className="carritoResumen">
        <h2>Resumen del Pedido</h2>
        <p>Total: <strong>{total.toFixed(2)}€</strong></p>
        <button onClick={realizarPago} className="btnPagar">Realizar Pago</button>
    </div>
);

export default PagoCarrito;
