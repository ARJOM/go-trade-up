import React, {useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

export default function EditCustomer(){
        const history = useHistory();

        const [name, setName] = useState('');
        const [email, setEmail] = useState('');
        const [senha, setSenha] = useState('');

        useEffect(()=>{
            const token = localStorage.getItem("token");
            const userEmail = localStorage.getItem('email')
            api.get(`users/${userEmail}`, {headers: {'x-access-token': token}}).then(response =>{
                    setName(response.data.user_name)
                    setEmail(response.data.email)
            })
        }, [])

    async function handleSubmit(){
        const emaill = localStorage.getItem('email')
        const token = localStorage.getItem("token");

        const data = {
            user_name: name,
            email: email,
            password: senha
        }

         try{
            const token = localStorage.getItem("token");
            const userEmail = localStorage.getItem('email')
            const resposta =  await api.put(`/users/${userEmail}`, data, {
                headers: {
                    'x-access-token': token
                }
            })
            console.log(resposta.data)
            alert('Dados alterados com sucesso!')
        }catch(err){
            alert('Falha ao alterar dados.')
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
                            <input type="text" className="nbreak" placeholder="Novo nome" value={name} onChange={text=>setName(text.target.value)}></input>
                        </label>

                        <label for="Novo e-mail">
                            E-mail:
                            <input type="text" disabled={true} className="nbreak" value={email}></input>
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
