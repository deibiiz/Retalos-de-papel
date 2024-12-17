import React from 'react';
import { Link } from 'react-router-dom';
import './Libro.css';


const Libro = ({ libro }) => {
    return (
        <div className="contenedorLibro">
            <Link to={`/Libro/${libro.id}`} className="seleccionableLibro">
                <h3>{libro.titulo}</h3>
                <p>{libro.autor}</p>
                <img src={`/imagenes/${libro.imagen}`} alt={libro.titulo} className="portadaLibro" />
            </Link>
        </div>
    );
};

export default Libro;
