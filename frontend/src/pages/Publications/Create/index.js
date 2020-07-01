import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function CreatePublication(){
    const [ descricao, setDescricao ] = useState("");

    const token = localStorage.getItem('token');

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            description: descricao
        };

        api.post('/publications', data, {
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => console.log(response))
            .catch(err => {alert("Erro ao cadastrar"); console.log(err)})
    }

    return (
        <div className="container-transparencia">
            <div>
                <section className="titulo">
                    <h1> Nova Publicacao de Transparencia </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inpute">
                        <label className="Descricao">
                            <span>Descrição:</span>
                            <textarea className="textAreaa" value={descricao} onChange={text=>setDescricao(text.target.value)}/>
                        </label>
                        <button onClick={handleSubmit} className="btn-concluir">
                            PUBLICAR
                        </button>
                    </section>
                </form>
            </section>
        </div>
    )
}
