import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function listUProducts(){
    
    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Produtos de //render content// </h1>
                </section>
            </div>

            <section className="content">
                
                <img src="" alt="No images available"> </img>
                
                <p><darker>Título:</darker>//render content//.</p>
                <p><darker>Descrição:</darker>//render content//.</p>

                <button><a href=""><p>Entre em contato</p></a></button>

                <p><darker>Preço:</darker>//render content//.</p>
                
            </section>
            
        </div>
    )
}
