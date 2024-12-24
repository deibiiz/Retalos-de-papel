import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="infoFooter">
                <p><Link to="/SobreNosotros">Sobre Nosotros</Link></p>
                <p> Contacto</p>
                <p> Política de Privacidad</p>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Relatos de Papel. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
