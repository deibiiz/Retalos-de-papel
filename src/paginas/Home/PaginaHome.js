import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // Para acceder a los parámetros de la URL
import useSearch from '../../hooks/useBusqueda';
import { libros } from '../../data/Libros';
import Libro from '../../componentes/Libro/Libro';
import './PaginaHome.css';

const PaginaHome = () => {
    const location = useLocation();
    const parametrosQuery = new URLSearchParams(location.search);
    const parametroBusqueda = parametrosQuery.get('busqueda') || ''; // Obtener el parámetro 'busqueda' de la URL

    const librosFiltrados = useSearch(libros, parametroBusqueda);

    return (
        <div className="mainContainer">
            <div className="ListaLibros">
                {librosFiltrados.length === 0 ? (
                    <p>No se encontraron libros que coincidan con tu búsqueda.</p>
                ) : (
                    librosFiltrados.map((libro) => (
                        <Libro key={libro.id} libro={libro} />
                    ))
                )}
            </div>
        </div>
    );
};

export default PaginaHome;
