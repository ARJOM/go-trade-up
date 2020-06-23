import React, { useState } from 'react';
import api from '../../../services/api.js';
import './styles.css';

export default function CreateUser(){

    const [name, setName ] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();


    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            user_name: name,
            email: email,
            password: senha
        };

        const response = await api.post('users', data);
            console.log('RESPONSE AQUI NO FRONT:  ', response.data)
            alert(response.data)

    }

    return(
        <div className="top">
            <section className="title">
                <h1>Cadastrar-se como Cliente</h1>
            </section>

            <section className="form">
                <form type="submit">
                    <section className="inputs">

                    <input type="text" placeholder="Nome" value={name}
                    onChange={text=>setName(text.target.value)} />

                    <input type="text" placeholder="Email" value={email}
                    onChange={text=>setEmail(text.target.value)} />

                    <input type="password" placeholder="Senha" value={senha}
                    onChange={text=>setSenha(text.target.value)} />
                    </section>

                    <section className="btn-cadastro">
                        <button className="btn-cancel">Cancelar</button>

                        <button onClick={handleSubmit} className="btn-concluir">Concluir</button>
                    </section>
                </form>
            </section>



        </div>
    )
}
