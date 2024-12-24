import React, { createContext, useState } from "react";

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarCarrito = (libro) => {
        const libroExistente = carrito.find(item => item.id === libro.id);

        if (libroExistente) {
            setCarrito(carrito.map(item =>
                item.id === libro.id ? { ...item, cantidad: item.cantidad + 1 } : item
            ));
        } else {
            setCarrito([...carrito, { ...libro, cantidad: 1 }]);
        }
    };

    const decrementarDelCarrito = (id) => {
        setCarrito(carrito.map(item =>
            item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        ).filter(item => item.cantidad > 0));
    };

    const incrementarCantidad = (id) => {
        setCarrito(carrito.map(item =>
            item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
        ));
    };
    const eliminarDelCarrito = (id) => {
        setCarrito([]);
    };


    return (
        <CarritoContext.Provider value={{ carrito, agregarCarrito, decrementarDelCarrito, incrementarCantidad, eliminarDelCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};
