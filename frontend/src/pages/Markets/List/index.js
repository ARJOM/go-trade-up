import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function ListMarket(){

    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Comerciantes </h1>
                </section>
            </div>

            <section className="content">

                <p><darker>Comércio: </darker>//render content//.</p>

                <p><darker>Local de atuação:</darker>//render content//.</p>

            </section>

            <section className="buttons">
                <button className="btn-listprd"> <a href=""> Ver Produtos </a> </button>

                <button className="btn-contact"> <a href=""> Entrar em Contato </a> </button>
            </section>
        </div>
    )
}
