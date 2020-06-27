import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function CreateDonation(){
    const [valores, setValores] = useState();
    const [description, setDescription] = useState();
    const [descricao, setDescricao] = useState();

    async function handleSubmit(){
        const data = {
            valores: valores,
            description: descricao
        }
    }

    return (
        <div className="donate-container">
            <div className="newDonation">
                <section className="title">
                    <h1>  Nova Doação </h1>
                </section>
            </div>

            <section className="former">
                <form>
                    <section className="inputs">
                    <span>Valor da doação:</span>

                        <label for="Valor">
                            <input type="text" className="nbreak" className="req" value={valores} onChange={text=>setValores(text.target.value)}></input>
                        </label>
                        
                       <span> Descrição:</span>
                        <label for="Descricao">
                            <textarea  className="textAreaa" type="text" className="nbreak" value={descricao} onChange={text=>setDescricao(text.target.value)} />
                        </label>
                    </section>
                    <section>
                   
                    <section className="paypal">
                  <a href="#">
                  Clique aqui para doar: <img src="https://timeline.canaltech.com.br/339987.700/o-que-e-o-paypal-saiba-tudo-sobre-a-plataforma-de-pagamentos-155603.jpg" />
                    </a>
                        </section>

                    </section>
                </form>
            </section>
        </div>
    )
}
