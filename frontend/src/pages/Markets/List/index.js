import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function ListMarket(){

    return (
        <div className="listMarket">
            <div>
                <section>
                    <h1 className="titulo"> Comerciantes </h1>
                </section>
            </div>

            <div className="content">
            <section className="dados">
                <p><darker>Comércio: </darker>Ricart Drogaria</p>
                <p><darker>Local de atuação:</darker>Uraúna - PB</p>
            </section>

            <section className="buttons">
                <button className="btn-listprd">Ver Produtos </button>

                <button className="btn-contact"> Entrar em Contato </button>
            </section>

            </div>


         
        </div>
    )
}
