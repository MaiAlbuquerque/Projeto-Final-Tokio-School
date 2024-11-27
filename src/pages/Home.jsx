import React from 'react';
// import NavBar from './components/NavBar';
import './Home.css'; 
import restinicial from '../assets/restinicial.jpg'; 

const Home = () => {
    return (
        <div>
            {/* <NavBar /> */}
          
            <div className='blocohome'>
                <img className="imghome" src={restinicial} alt="sala do restaurante" />
            </div>
            
        </div>
    );
};

export default Home;
