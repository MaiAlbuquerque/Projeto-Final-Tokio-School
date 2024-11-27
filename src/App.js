// src/App.js
import React from "react";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from "./components/Footer";

// Importe os componentes das páginas
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Menu from './pages/Menu';
import Especialidades from './pages/Especialidades';
import MenuEmGrupo from './pages/MenuEmGrupo';
import Reservas from './pages/Reservas';


const App = () => {
  return (
    <Router>
      <NavBar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Sobre" element={<Sobre />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Especialidades" element={<Especialidades />} />
        <Route path="/MenuEmGrupo" element={<MenuEmGrupo />} />
        <Route path="/Reservas" element={<Reservas />} />
      </Routes>
      <Footer/>
    </Router>

  );
};

export default App;
