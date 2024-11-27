import React, { useState } from 'react';
import './Menu.css'; 

const Menu = () => {
  const pratos = [
    { id: 1, nome: 'Risoto de abóbora', descricao: 'Risoto de abóbora e frango', imagem: require('../assets/prato1.jpg') },
    { id: 2, nome: 'Salmão Teraki', descricao: 'Salmão ao molho de teraki', imagem: require('../assets/prato2.jpg') },
    { id: 3, nome: 'Macarrão ao pesto', descricao: 'Macarrão ao molho de pesto com lascas de lagosti', imagem: require('../assets/prato3.jpg') },
    { id: 4, nome: 'Bacalhau do norte', descricao: 'Bacalhau com legumes e molho de cebola', imagem: require('../assets/prato4.jpg') },
    { id: 5, nome: 'Carne com aspargos', descricao: 'Carne maturada com aspargos ao vapor', imagem: require('../assets/prato5.jpg') },
    { id: 6, nome: 'Frango ao curry', descricao: 'Frango ao molho de coco, curry e especiarias', imagem: require('../assets/prato6.jpg') },
  ];

  const takeAway = [
    { id: 7, nome: 'Hamburguer de cordeiro', descricao: 'Delicioso hamburguer de cordeiro com queijo e molhos', imagem: require('../assets/prato7.jpg') },
    { id: 8, nome: 'Pizza de peperoni', descricao: 'Pizza de peperoni e manjericão', imagem: require('../assets/prato8.jpg') },
  ];

  const [imagemAmpliada, setImagemAmpliada] = useState(null);

  const abrirImagem = (imagem) => {
    setImagemAmpliada(imagem);
  };

  const fecharModal = () => {
    setImagemAmpliada(null);
  };

  return (
    <div className='bloco1'>
      <h1>The Nordic Table</h1>
      <div className='divp'>
        <p>Explore nosso menu, onde o frescor nórdico se encontra com o requinte francês, em pratos criados 
        para surpreender e encantar.</p>
      </div>

      <div className="grid-menu">
        {pratos.map(prato => (
          <div key={prato.id} className="card-prato">
            <img
              src={prato.imagem}
              alt={prato.nome}
              onClick={() => abrirImagem(prato.imagem)}
              style={{ cursor: 'pointer' }}
            />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
          </div>
        ))}
      </div>

      <h2>Take-Away</h2>
      <div className="grid-takeaway">
        {takeAway.map(prato => (
          <div key={prato.id} className="card-prato">
            <img
              src={prato.imagem}
              alt={prato.nome}
              onClick={() => abrirImagem(prato.imagem)}
              style={{ cursor: 'pointer' }}
            />
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
          </div>
        ))}
      </div>

      {imagemAmpliada && (
        <div className="modal" onClick={fecharModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={fecharModal}>&times;</span>
            <img src={imagemAmpliada} alt="Imagem ampliada" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Menu;
