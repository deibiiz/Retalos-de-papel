import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import './PaginaLanding.css';

const PaginaLanding = () => {
    const navigate = useNavigate();
    const [progreso, setProgreso] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setProgreso((prev) => {
                const nuevoProgreso = prev + 2;
                if (nuevoProgreso >= 100) {
                    clearInterval(intervalo);
                    navigate("/home");
                }
                return nuevoProgreso;
            });
        }, 100);

        return () => clearInterval(intervalo);
    }, [navigate]);

    
    return (
        <div className="contenedor">
            <div className="texto-container">
                <h1 className="titulo">Bienvenidos a Relatos de Papel</h1>
                <p className="subtitulo">Tu librería online favorita para explorar libros increíbles</p>
                <div className="barraProgreso">
                    <div className="progreso" style={{ width: `${progreso}%` }}/>
                </div>
            </div>
        </div>
      );
};

export default PaginaLanding;