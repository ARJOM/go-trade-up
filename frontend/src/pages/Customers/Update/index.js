import React, {useState, useEffect } from 'react';
import api from '../../../services/api';
import './styles.css';

export default function EditCustomer(){
        const [name, setName] = useState();
        const [email, setEmail] = useState();
        const [senha, setSenha] = useState();

        useEffect(()=>{
            const userEmail = localStorage.getItem('email')
            console.log('EMAIL: ', userEmail)
            api.get(`users/${userEmail}`).then(respose =>{
                console.log(respose.data);
            })
        }, [])

    async function handleSubmit(){
        const data = {
            user_name: name,
            email: email,
            password: senha
        }
    }

    return (
        <div className="editContainer">
            <div>
                <section className="topo">
                    <h1>     Editar Dados - Cliente </h1>
                </section>
            </div>

            <section className="formulario">
                <form>
                    <section className="inputs">
                        <label for="Novo nome">
                            Altere seu nome:
                            <input type="text" className="nbreak" placeholder="exemplo: Marcos Vinicius" value={name} onChange={text=>setName(text.target.value)}></input>
                        </label>

                        <label for="Novo e-mail">
                            Altere seu e-mail:
                            <input type="text" className="nbreak" placeholder="exemplo: email@gmail.com" value={email} onChange={text=>setEmail(text.target.value)}></input>
                        </label>

                        <label for="Nova senha">
                            Altere sua senha:
                            <input type="password" className="nbreak" placeholder="Nova senha" value={senha} onChange={text=>setSenha(text.target.value)}></input>
                        </label>
                    </section>

                  
                </form>
                <section className="butttons">
                        <button className="btn-cancel">
                            Cancelar
                        </button>

                        <button className="btn-excluir">
                            Excluir Usuario
                        </button>

                        <button onClick={handleSubmit} className="btn-conclui">
                            Salvar Alteracoes
                        </button>
                    </section>
            </section>
        </div>
    )
}
