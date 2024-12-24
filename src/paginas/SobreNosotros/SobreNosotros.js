import React from "react";
import Equipo from "../../componentes/Equipo/Equipo";
import SeccionInformativa from "../../componentes/InfoEquipo/SeccionInformativa";
import { EquipoData } from "../../data/EquipoData";
import "./SobreNosotros.css";

const SobreNosotros = () => {

    return (
        <div className="contenedorSobreNosotros">
            <SeccionInformativa
                titulo="Nuestra Misión"
                contenido="En Relatos de Papel, conectamos a las personas con historias increíbles. Creemos en el poder de los libros para cambiar vidas."
            />
            <h2>Conoce a nuestro equipo</h2>
            <div className="equipoContainer">
                {EquipoData.map((miembro) => (
                    <Equipo {...miembro} />
                ))}
            </div>
        </div>
    );
};

export default SobreNosotros;
