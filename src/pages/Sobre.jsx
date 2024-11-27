import React from 'react'
import './Sobre.css'; 
import imgsobre from '../assets/imgsobre.jpg'; 


const Sobre = () => {
    return (
        <div>
            <h1>Nordic Roots</h1>

            <div className="containersobre">
                
                <div className="texto">

                    <p className='psobre'>Bem-vindo ao Maison Nordic, onde a pureza da culinária nórdica encontra a sofisticação da cozinha francesa. Nosso restaurante nasceu do desejo de criar uma experiência gastronômica que fosse, ao mesmo tempo, sofisticada e acessível, perfeita para aqueles que buscam qualidade e inovação no prato.

Inspirados pelos sabores naturais e minimalistas do norte da Europa e pela tradição culinária francesa, trazemos uma cozinha autêntica e moderna, que respeita os ingredientes e valoriza o frescor em cada detalhe. Aqui, cada prato é uma jornada – das paisagens nórdicas ao requinte dos bistrôs parisienses, sempre com uma pitada de criatividade.

O ambiente foi pensado para ser acolhedor e tranquilo, onde todos se sintam à vontade. Um espaço para reunir amigos, celebrar a dois ou simplesmente relaxar e explorar novos sabores. Acreditamos que a boa gastronomia não precisa de rótulos e deve ser apreciada por todas as tribos.

Com uma equipe dedicada a tornar sua experiência memorável, convidamos você a se perder entre nossos pratos e a descobrir o equilíbrio perfeito entre tradição e inovação, com uma pitada de ousadia e muito sabor. Venha e sinta-se em casa no Nord & Sud!</p>
               
                </div>

                <div className="imagem">
                <img className="imgsobre" src={imgsobre} alt="sala do restaurante" />
                </div>

            </div>

        </div>

    );

};

export default Sobre;