import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function CreateDonation(){
    const [valores, setValores] = useState(0.0);
    const [descricao, setDescricao] = useState("");

    const token = localStorage.getItem("token");

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            value: valores,
            description: descricao
        };

        api.post('donation/', data, {
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => alert("Doação registrada"))
            .catch(err => alert("Erro ao registrar doação"))
    }

    return (
        <div className="donate-container">
            <div className="newDonation">
                <section>
                    <h1> Nova Doação </h1>
                </section>
            </div>

            <section className="former">
                <form>
                    <section className="entrada">
                    <span>Valor da doação:</span>

                        <label htmlFor="Valor">
                            <input type="text" className="req" value={valores} onChange={text => setValores(text.target.value)}/>
                        </label>

                       <span> Descrição:</span>
                        <label htmlFor="Descricao">
                            <textarea  className="textAreaa" value={descricao} onChange={text=>setDescricao(text.target.value)} />
                        </label>
                    </section>
                    <section>

                    <section className="paypal">
                  <a href="#">
                  Clique aqui para doar: <img onClick={handleSubmit} src="https://timeline.canaltech.com.br/339987.700/o-que-e-o-paypal-saiba-tudo-sobre-a-plataforma-de-pagamentos-155603.jpg" />
                    </a>
                        </section>

                    </section>
                </form>
            </section>
        </div>
    )
}
