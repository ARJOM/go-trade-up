import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function ListPublication(){

    return (
        <div className="listMarket">
            <div>
                <section>
                    <h1> Portal de Doações </h1>
                </section>
            </div>

            <div className="content">
            <section className="dados">
                <p>Doação de R$ 150,00 direcionada para o lar de idosos
                    de Cajazeiras-PB.</p>
                    <p><darker>Data:</darker>27/06/2020</p>
            </section>
            </div>

        </div>
    )
}
