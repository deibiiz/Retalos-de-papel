import React from "react";
import "./SeccionInformativa.css";

const SeccionInformativa = ({ titulo, contenido }) => {
    return (
        <div className="seccionInformativa">
            <div className="texto">
                <h2>{titulo}</h2>
                <p>{contenido}</p>
            </div>
        </div>
    );
};

export default SeccionInformativa;
