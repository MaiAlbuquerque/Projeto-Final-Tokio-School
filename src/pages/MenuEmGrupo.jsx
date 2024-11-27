import React, { useState } from "react";
import "./MenuEmGrupo.css";
import compartilhar from "../assets/compartilhar.jpg";
import {useNavigate} from "react-router-dom";

const MenuEmGrupo = () => {
  const [openMenu, setOpenMenu] = useState(null); 

  const navigate = useNavigate();

  const toggleDropdown = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu); 

  };

  const handleReservationClick = () => {
    navigate("/Reservas");
  }

  return (
    <div>
      <h1>Shared Table</h1>

      <div className="menugrupo-content">
        <div className="img-menugrupo">
          <img
            className="img-menugrupo"
            src={compartilhar}
            alt="amigos comendo juntos"
          />
        </div>
        <div className="menugrupo-description">
          <p>
            Pensados para compartilhar bons momentos e celebrar a boa
            gastronomia, nossos Menus para Grupos são ideais para reuniões de
            amigos, eventos de trabalho e celebrações especiais. Oferecemos
            opções variadas, com entradas, pratos principais e sobremesas,
            servidos em um estilo acolhedor e convidativo.
          </p>
         
        </div>
      </div>

      <div className="menu-titulo">
        <h1>Opções de Menu para Grupos</h1>
        <p>
            Escolha entre nossos menus personalizados abaixo, disponíveis em
            formato drop-down para facilitar sua seleção. Ao escolher, você verá
            detalhes de cada menu e poderá personalizar a experiência conforme o
            tamanho do grupo.
          </p>
      </div>

      <div className="container-drop">
        {/* Menu Vegan */}
        <div className={`dropdown ${openMenu === "vegan" ? "open" : ""}`}>
          <button
            className="dropdown-button"
            onClick={() => toggleDropdown("vegan")}
          >
            Menu Vegan
          </button>
          {openMenu === "vegan" && (
            <ul className="dropdown-menu">
              <li>Entrada: Bruschetta de Abacate e Bolinho de Grão-de-Bico</li>
              <li>Principal: Risoto de Cogumelos e Aspargos</li>
              <li>Sobremesa: Torta de Chocolate com Castanhas</li>
              <li>Bebida: Suco Verde Detox ou cerveja vegana</li>
            </ul>
          )}
        </div>

        {/* Menu França */}
        <div className={`dropdown ${openMenu === "franca" ? "open" : ""}`}>
          <button
            className="dropdown-button"
            onClick={() => toggleDropdown("franca")}
          >
            Menu da Casa
          </button>
          {openMenu === "franca" && (
            <ul className="dropdown-menu">
              <li>Entrada: Quiche Lorraine e Escargots à la Bourguignonne</li>
              <li>Principal: Coq au Vin</li>
              <li>Sobremesa: Tarte Tatin</li>
              <li>Bebida: Vin de Bordeaux</li>
            </ul>
          )}
        </div>


        {/* Menu Sofisticado */}
        <div className={`dropdown ${openMenu === "sofisticado" ? "open" : ""}`}>
          <button
            className="dropdown-button"
            onClick={() => toggleDropdown("sofisticado")}
          >
            Menu Sofisticado
          </button>
          {openMenu === "sofisticado" && (
            <ul className="dropdown-menu">
              <li>Entrada: Mini Tartar de Salmão com Avocado e Bruschetta de Brie com Mel Trufado e Nozes</li>
              <li>Principal: Risoto de Camarão com Limão Siciliano</li>
              <li>Sobremesa: Mousse de Chocolate Belga com Frutas Vermelhas</li>
              <li>Bebida: Espumante Brut Rosé ou Coquetel de Gin com Frutas</li>
            </ul>
          )}
        </div>

      </div>

      <div className="menu-titulo">
       
        <p>
        Para garantir sua mesa e proporcionar uma experiência especial,
        clique no botão de reserva e complete o processo.
        </p>

        <button onClick={handleReservationClick} className="menu-titulo-button" >Faça sua reserva!</button>

      </div>

    </div>
  );
};

export default MenuEmGrupo;
