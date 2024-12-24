import React, { useContext } from "react";
import { CarritoContext } from "../../CarritoContext";
import { useNavigate } from "react-router-dom";
import ResumenCarrito from "../../componentes/ResumenCarrito/ResumenCarrito";
import PagoCarrito from "../../componentes/Pago/PagoCarrito";
import "./paginaCarrito.css";

const PaginaCarrito = () => {
    const { carrito, eliminarDelCarrito } = useContext(CarritoContext);
    const navigate = useNavigate();

    const total = carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);

    const realizarPago = () => {
        alert("Su compra ha sido realizada con éxito. ¡Gracias por su compra!");
        carrito.forEach((item) => {
            eliminarDelCarrito(item.id);
        });
        navigate("/Home");
    };

    return (
        <div className="contenedorCarrito">
            {carrito.length > 0 ? (
                <>
                    <div className="carritoLista">
                        {carrito.map((item) => (
                            <ResumenCarrito item={item} />
                        ))}
                    </div>
                    <PagoCarrito total={total} realizarPago={realizarPago} />
                </>
            ) : (
                <p>El carrito está vacío. Añade productos para continuar.</p>
            )}
        </div>
    );
};

export default PaginaCarrito;
