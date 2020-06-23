import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function EditUser(){

    async function handleSubmit(){
        const data = {
            user_name: nome,
            email: email,
            password: senha
        }
    }

    return (
        <div>
            <div className="editTop">
                <section className="title">
                    <h1> Editar Dados - Cliente </h1>
                </section>
            </div>

            <section className="editUserForm">
                <form>
                    <section className="inputs">
                        <label for="Novo Nome">
                            Altere seu nome:
                            <input type="text" placeholder="Novo Nome" value={nome} onChange={text=>setNome(text.target.value)}></input>
                        </label>

                        <label for="Novo Email">
                            Altere seu e-mail:
                            <input type="text" placeholder="Novo E-mail" value={email} onChange={text=>setEmail(text.target.value)}></input>
                        </label>

                        <label for="Nova Senha">
                            Altere sua senha:
                            <input type="text" placeholder="Nova Senha" value={senha} onChange={text=>setSenha(text.target.value)}></input>
                        </label>
                    </section>
                    <input type="submit" value="Editar Dados"></input>

                    <section>
                        <button className="cancelarEdit">
                            Cancelar
                        </button>

                        <button className="exlcuirUser">
                            Excluir Usuario
                        </button>

                        <button onClick={handleSubmit} className="saveEdit">
                            Salvar Alteracoes
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}
