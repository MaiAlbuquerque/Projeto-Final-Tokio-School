import React from "react";
import "./Especialidades.css";
import imgchef from "../assets/imgchef.jpg";
import prato6 from "../assets/prato6.jpg";
import prato4 from "../assets/prato4.jpg";
import prato5 from "../assets/prato5.jpg";

const Especialidades = () => {
  return (
    <div className="especialidades-container">
     
        <h1>The Chef</h1>

        {/* Sessão Chef */}
        <div className="chef-content">
          <div className="chef-image">
            <img src={imgchef} alt="Chef do restaurante" />
          </div>
          <div className="chef-description">
            <p>
              Nossa equipe é liderada por uma chef talentosa e experiente, que
              traz ao Maison Nordic uma visão única e inovadora da culinária.
              Com uma trajetória internacional, expertise e criatividade,
              explora cozinhas ao redor do mundo, trazendo para o restaurante a
              autenticidade dos sabores nórdicos e a sofisticação da gastronomia
              francesa. Sempre aberta a novas experiências e técnicas, ela
              combina ingredientes frescos e inusitados, transformando cada
              prato em uma descoberta.
            </p>
          </div>
        </div>
 

      {/* Sessão Chef's Picks */}
      
      <section className="picks-section">
        <h1>Chef’s Picks</h1>
        <p className="picks-description">
          Nossos pratos mais pedidos celebram o melhor da fusão nórdica e
          francesa, cada um preparado com técnicas apuradas e ingredientes
          frescos que destacam o sabor natural de cada ingrediente.
        </p>

        <div className="picks-content">
          <div className="pick-item left">
            <img src={prato6} alt="Frango ao molho de coco, curry e especiarias" />
            <p>Frango ao molho de coco, curry e especiarias</p>
          </div>

          <div className="pick-item right">
            <img src={prato4} alt="Bacalhau com legumes e molho de cebola" />
            <p className="pick-itemprigth">Bacalhau com legumes e molho de cebola</p>
          </div>

          <div className="pick-item left">
            <img src={prato5} alt="Carne maturada com aspargos ao vapor" />
            <p>Carne maturada com aspargos ao vapor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Especialidades;
