import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './componentes/Layout/Layout';
import PaginaLanding from './paginas/Landing/PaginaLanding';
import PaginaLibro from './paginas/Libro/PaginaLibro';
import PaginaHome from './paginas/Home/PaginaHome';
import PaginaCarrito from './paginas/Carrito/paginaCarrito';
import SobreNostros from './paginas/SobreNosotros/SobreNosotros';


export const AppRouter = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaLanding />} />
        <Route path="/Home" element={<Layout><PaginaHome /></Layout>} />
        <Route path="Libro/:id" element={<Layout><PaginaLibro /></Layout>} />
        <Route path="/Carrito" element={<Layout><PaginaCarrito /></Layout>} />
        <Route path="/SobreNosotros" element={<Layout><SobreNostros /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};