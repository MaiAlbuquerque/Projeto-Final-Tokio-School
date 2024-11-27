import React from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav>
      <h1 className="titleprincipal">Maison Nordic</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Sobre">Nordic Roots</Link></li>
        <li><Link to="/Menu">The Nordic Table</Link></li>
        <li><Link to="/Especialidades">Chef’s Picks</Link></li>
        <li><Link to="/MenuEmGrupo">Shared Table</Link></li>
        <li><Link to="/Reservas">Nordic welcome</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
