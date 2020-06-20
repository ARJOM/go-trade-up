import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';

export default function marketerEdit(){

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
            <div className="top">
                <section className="title">
                    <h1> Editar Dados - Comerciante </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <label for="Novo nome">
                            Altere seu nome:
                            <input type="text" className="nbreak" placeholder="Novo nome" value={nome} onChange={text=>setNome(text.target.value)}></input>
                        </label>

                        <label for="Novo e-mail">
                            Altere seu e-mail:
                            <input type="text" className="break" placeholder="Novo e-mail" value={email} onChange={text=>setEmail(text.target.value)}></input>
                        </label>

                        <label for="Nova senha">
                            Altere sua senha:
                            <input type="text" className="nbreak" placeholder="Nova senha" value={senha} onChange={text=>setSenha(text.target.value)}></input>
                        </label>

                        <label for="Novo estado">
                            Altere seu estado:
                            <input type="text" className="break" placeholder="Novo estado" value={estado} onChange={text=>setEstado(text.target.value)}></input>
                        </label>

                        <label for="Nova Cidade">
                            Altere sua cidade:
                            <input type="text" className="break" placeholder="Nova Cidade" value={cidade} onChange={text=>setCidade(text.target.value)}></input>
                        </label>

                        <label for="Nova Endereco">
                            Altere seu endereco:
                            <input type="text" className="nbreak" placeholder="Novo Endereco" value={endereco} onChange={text=>setEndereco(text.target.value)}></input>
                        </label>

                        <label for="Novo Telefone">
                            Altere seu telefone:
                            <input type="text" className="break" placeholder="Novo Telefone" value={telefone} onChange={text=>setTelefone(text.target.value)}></input>
                        </label>
                    </section>
                    <input type="submit" value="Editar Dados"></input>

                    <section className="buttons">
                        <button className="btn-cancel">
                            Cancelar
                        </button>

                        <button className="btn-excluir">
                            Excluir Usuario
                        </button>
                        
                        <button onClick={handleSubmit} className="btn-concluir">
                            Salvar Alteracoes
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}