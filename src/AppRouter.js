import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaLanding from './paginas/Landing/PaginaLanding';
import PaginaLibro from './paginas/PaginaLibro';
import PaginaMain from './paginas/PaginaMain';
import PaginaPago from './paginas/PaginaPago';


export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLanding />} />
        <Route path="/Home" element={<PaginaMain />} />
        <Route path="Libro/:id" element={<PaginaLibro />} />
        <Route path="/Resumen" element={<PaginaPago />} />
      </Routes>
    </BrowserRouter>
  );
};


