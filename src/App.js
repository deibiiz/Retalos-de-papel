import React from 'react';
import { AppRouter } from './AppRouter';
import { CarritoProvider } from './CarritoContext';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <CarritoProvider>
        <AppRouter />
      </CarritoProvider>
    </div>
  );
};

export default App;
