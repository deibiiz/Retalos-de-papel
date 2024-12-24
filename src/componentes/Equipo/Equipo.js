import React from "react";
import "./Equipo.css";

const Equipo = ({ nombre, rol, imagen, descripcion }) => (
    <div className="equipoTarjeta">
        <img src={`/imagenes/${imagen}`} alt={nombre} className="equipoImagen" />
        <div className="equipoInfo">
            <h3>{nombre}</h3>
            <p className="rol">{rol}</p>
            <p className="descripcion">{descripcion}</p>
        </div>
    </div>
);

export default Equipo;
