import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';

export default function listMProducts(){
    
    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Meus Produtos </h1>
                </section>
            </div>

            <section className="content">
                
                <img src="" alt="No images available"> </img>

                <p><darker>Título:</darker>//render content//.</p>
                <p><darker>Descrição:</darker>//render content//.</p>
                <p><darker>Preço:</darker>//render content//.</p>

                <div className="btn-concluir">
                    <button><a href=""> Editar Produto </a></button>
                </div>
                
            </section>
            
            <div className="btn-add">
                <button><a href=""> + </a></button>
            </div>

        </div>
    )
}