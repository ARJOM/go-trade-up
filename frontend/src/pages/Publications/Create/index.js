import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function CreatePublication(){
    const [ descricao, setDescricao ] = useState();


    async function handleSubmit(){
        const data = {
            description: descricao
        }
    }

    return (
        <div className="container-transparencia">
            <div className="top">
                <section className="title">
                    <h1> Nova Publicacao de Transparencia </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <label className="Descricao">
                            <span>Descrição:</span>
                            <textarea className="textAreaa" type="text" className="nbreak" value={descricao} onChange={text=>setDescricao(text.target.value)}/>
                        </label>
                    </section>


                    <section className="buttons">
                        <button onClick={handleSubmit} className="btn-concluir">
                            PUBLICAR
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}
