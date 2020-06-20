import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';

export default function pubTransparencia(){

    async function handleSubmit(){
        const data = {
            photo: foto,
            description: descricao
        }
    }
    
    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Nova Publicacao de Transparencia </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <label for="Foto">
                            Foto:
                            <input type="image" src="" alt="No Images Available" > </input>
                        </label>

                        <label for="Descricao">
                            Descreva sua doacao:
                            <input type="text" className="nbreak" placeholder="Descricao" value={descricao} onChange={text=>setDescricao(text.target.value)}></input>
                        </label>
                    </section>

                    <input type="submit" value="Publicar"></input>

                    <section className="buttons">
                        <button className="btn-cancel">
                            Cancelar
                        </button>
                        
                        <button onClick={handleSubmit} className="btn-concluir">
                            Publicar
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}