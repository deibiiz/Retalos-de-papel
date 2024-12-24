import { useState, useEffect } from 'react';

function useSearch(libros, parametroBusqueda) {
    const [resultados, setResultados] = useState([]);

    useEffect(() => {
        const filtrados = libros.filter((item) =>
            item.titulo.toLowerCase().includes(parametroBusqueda.toLowerCase())
        );
        setResultados(filtrados);
    }, [libros, parametroBusqueda]);

    return resultados;
}

export default useSearch;
