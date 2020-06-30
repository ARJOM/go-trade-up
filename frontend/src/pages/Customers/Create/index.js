import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api.js';
import './styles.css';

export default function CreateCustomer(){
    const history = useHistory();

    const [name, setName ] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();


    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            user_name: name,
            email: email,
            password: senha
        }

        const response = await api.post('users', data);
            alert(response.data)
            alert( 'Clique na foto no canto superior direto para logar! ')
            history.push('/');
    }

    return(
        <div className="clientContainer">
            <section className="former">
            <section>
                <h1>Cadastrar-se como Cliente</h1>
            </section>
                <form type="submit">
                    <section>

                    <input type="text" placeholder="Nome" value={name}
                    onChange={text=>setName(text.target.value)} />

                    <input type="text" placeholder="Email" value={email}
                    onChange={text=>setEmail(text.target.value)} />

                    <input type="password" placeholder="Senha" value={senha}
                     onChange={e=> setSenha(e.target.value)} />

                 
                    </section>

                    <section className="butoes">
                        <button className="btn-cancel">Cancelar</button>

                        <button onClick={handleSubmit} className="btn-concluir">Concluir</button>
                    </section>
                </form>
            </section>



        </div>
    )
}
