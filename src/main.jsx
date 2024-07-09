import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from './pages/Details';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/details/:id" element={<Detail/>}/> {/* O ':' é para recuperarmos o id do filme que foi clicado para que seja mostrado a tela de detalhes do memsmo*/}
    </Routes>
  </BrowserRouter>
);

