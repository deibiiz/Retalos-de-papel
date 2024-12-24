import React from 'react';
import { useParams } from 'react-router-dom';
import { libros } from '../../data/Libros'; // Datos mock
import DetalleLibro from '../../componentes/DetalleLibro/DetalleLibro'; // Componente reutilizable
import './PaginaLibro.css';

const PaginaDetalleLibro = () => {
    const { id } = useParams(); // Obtener el ID de la URL
    const libro = libros.find((libro) => libro.id === parseInt(id, 10)); // Buscar el libro por ID

    if (!libro) {
        return <p>Libro no encontrado.</p>;
    }

    return (
        <div className="paginaDetalleLibro">
            <DetalleLibro libro={libro} />
        </div>
    );
};

export default PaginaDetalleLibro;
