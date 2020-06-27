import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function EditMarket(){
    const [nome, setNome] = useState();
    const [email, setEmail] = useState();
    const  [estado, setEstado] = useState();
    const [senha, setSenha] = useState();
    const [cidade, setCidade] = useState();
    const [endereco, setEndereco] = useState();
    const [telefone, setTelefone] = useState();

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
        <div className="editMarket">
            <div className="top">
                <section className="titulo">
                    <h1> Editar Dados - Comerciante </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <span className="titulo"> Novo nome:</span>
                        <label for="Novo nome">
                            <input type="text" className="nbreak" placeholder="Novo nome" value={nome} onChange={text=>setNome(text.target.value)}></input>
                        </label>

                        <span className="titulo">Novo e-mail:</span>
                        <label for="Novo e-mail">
                            <input type="text" className="break" placeholder="Novo e-mail" value={email} onChange={text=>setEmail(text.target.value)}></input>
                        </label>

                        <span className="titulo">Nova senha:</span>
                        <label for="Nova senha">
                            <input type="text" className="nbreak" placeholder="Nova senha" value={senha} onChange={text=>setSenha(text.target.value)}></input>
                        </label>

                        <span className="titulo">Novo número:</span>
                        <label for="Novo Telefone">
                            <input type="text" className="telefone" placeholder="Novo Telefone" value={telefone} onChange={text=>setTelefone(text.target.value)}></input>
                        </label>
                            <section className="location">

                        <label for="Novo estado">
                            <input type="text" className="break" placeholder="Estado" value={estado} onChange={text=>setEstado(text.target.value)}></input>
                        </label>

                        <label for="Nova Cidade">
                            <input type="text" className="break" placeholder="Cidade" value={cidade} onChange={text=>setCidade(text.target.value)}></input>
                        </label>

                        <label for="Nova Endereco">
                            <input type="text" className="nbreak" placeholder="Endereco" value={endereco} onChange={text=>setEndereco(text.target.value)}></input>
                        </label>
                        </section>

                    </section>

                    <section className="botoes">
                        <button className="btn-cancelado">
                            Cancelar
                        </button>

                        <button className="btn-excluido">
                            Excluir Usuario
                        </button>

                        <button onClick={handleSubmit} className="btn-concluido">
                            Salvar Alteracoes
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}
