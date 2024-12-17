import React, { useEffect } from 'react';
import './PaginaHome.css';
import { libros } from '../../data/Libros';
import Libro from '../../componentes/Libro/Libro';
import { useLocation } from 'react-router-dom'; // Para acceder a los parámetros de la URL

const PaginaHome = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('search') || ''; // Obtener el parámetro 'search' de la URL

    const filteredBooks = libros.filter((libro) =>
        libro.titulo.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="mainContainer">
            <div className="ListaLibros">
                {filteredBooks.length === 0 ? (
                    <p>No se encontraron libros que coincidan con tu búsqueda.</p>
                ) : (
                    filteredBooks.map((libro) => (
                        <Libro key={libro.id} libro={libro} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PaginaHome;
