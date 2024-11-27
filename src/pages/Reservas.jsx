import React from 'react';
import './Reservas.css';

const Reservas = () => {
    return (
        <div className="page-container">
            <div className="form-container">
                <h1>Nordic Welcome</h1>
                <p>Preencha seus dados e reserve uma mesa em nosso restaurante</p>
                <form>
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" placeholder="Nome"></input>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email"></input>
                    </div>
                    <div className="form-group">
                        <label>Telefone</label>
                        <input type="text" placeholder="Telefone"></input>
                    </div>
                    <div className="form-group">
                        <label>Data</label>
                        <input type="date" placeholder="Data"></input>
                    </div>
                    <div className="form-group">
                        <label>Hora</label>
                        <input type="time" placeholder="Hora"></input>
                    </div>
                    <div className="form-group">
                        <label>Número de pessoas</label>
                        <input type="number" placeholder="Número de pessoas"></input>
                    </div>
                    <div className="form-group">
                        <label>Observações:</label>
                        <textarea placeholder="Explique aqui se tem alergias ou necessidades especiais de locomoção."></textarea>
                    </div>
                    <button type="submit">Reservar</button>
                </form>
            </div>
        </div>
    );
};

export default Reservas;
