import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function EditMarket(){

    async function handleSubmit(){
        const data = {
            user_name: nome,
            email: email,
            password: senha,
            state: estado,
            city: cidade,
            address: endereco,
            telephone: telefone
        }
    }

    return (
        <div>
            <div className="editMTop">
                <section className="title">
                    <h1> Editar Dados - Comerciante </h1>
                </section>
            </div>

            <section className="editMarketerForm">
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

                        <label for="Novo Estado">
                            Altere seu Estado:
                            <input type="text" placeholder="Novo Estado" value={estado} onChange={text=>setEstado(text.target.value)}></input>
                        </label>

                        <label for="Nova Cidade">
                            Altere sua cidade:
                            <input type="text" placeholder="Nova Cidade" value={cidade} onChange={text=>setCidade(text.target.value)}></input>
                        </label>

                        <label for="Nova Endereco">
                            Altere seu endereco:
                            <input type="text" placeholder="Novo Endereco" value={endereco} onChange={text=>setEndereco(text.target.value)}></input>
                        </label>

                        <label for="Novo Telefone">
                            Altere seu telefone:
                            <input type="text" placeholder="Novo Telefone" value={telefone} onChange={text=>setTelefone(text.target.value)}></input>
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
