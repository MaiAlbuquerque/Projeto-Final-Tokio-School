import React from 'react';
import './Footer.css'; 
import tiktok from '../assets/tiktok.png'; 
import instagram from '../assets/instagram.png'; 

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-content">

        <p className='pfooter'><span className="footer-content-spann">© {new Date().getFullYear()}</span> Maison Nordic.</p>
        <p className="footer-content-span">Todos os direitos reservados.</p>
        <p className="footer-content-span">Endereço: Rua José Carlos, 123 - Porto, Porto</p>
        <p className="footer-content-span">Telefone: (+351) 25734-5678</p>
      </div>

      <div>
      <div className="redessociais">
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
          <img className="imgredessociais" src={tiktok} alt="logo tiktok" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img className="imgredessociais" src={instagram} alt="logo instagram" />
        </a>
    </div>
      </div>
    </footer>
  );
};

export default Footer;
