import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';

export default function Donation(){

    async function handleSubmit(){
        const data = {
            valuedn: valores,
            description: descricao
        }
    }
    
    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Realizar Nova Doação </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <label for="Valor">
                            Valor da doação:
                            <input type="text" className="nbreak" className="req" placeholder="Valor" value={valores} onChange={text=>setValores(text.target.value)}></input>
                        </label>

                        <label for="Descricao">
                            Descreva sua doacao:
                            <input type="text" className="nbreak" className="req" placeholder="Descricao" value={descricao} onChange={text=>setDescricao(text.target.value)}></input>
                        </label>
                    </section>

                    <h3> Doe com PayPal <a> </a> </h3>
                    <input type="submit" value="Doar"></input>

                    <section>
                        <button className="btn-cancel">
                            Cancelar
                        </button>
                        
                        <button onClick={handleSubmit} className="btn-concluir">
                            Efetuar Doacao
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}