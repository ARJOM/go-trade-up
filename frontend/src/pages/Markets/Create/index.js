import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

export default function CreateMarket(){
    const history = useHistory();

    const [nome, setName] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [endereco, setEndereco] = useState();
    const [telefone, setTelefone] = useState();

    async function handleSubmit(e){
        e.preventDefault();
        const data = {
            user_name: nome,
            email: email,
            password: senha,
            uf: estado,
            city: cidade,
            address: endereco,
            phone: telefone
        };
        console.log(data);
        try{
            const response = await api.post('markets', data);
            alert('Cadastro de Comerciante realizado com sucesso!');
            alert('Realize login clicando no canto superior direito da tela.')
            history.push('/');
        }catch(err){
            console.log('DEU RUIM  no cadastro. Tente novamente.', err)
        }
    }

    return(
        <div className="container-market">
            <div>
                <section>
                    <h1>Cadastrar-se como Comerciante</h1>
                </section>
            </div>

            <section className="formulario">
                <form type="submit">
                    <section className="inputes">
                        <label htmlFor="Nome">
                            <input type="text" placeholder="Nome" value={nome} onChange={text=>setName(text.target.value)} />
                        </label>

                        <label htmlFor="Email">
                            <input type="text" placeholder="E-mail" value={email} onChange={text=>setEmail(text.target.value)} />
                        </label>

                        <label htmlFor="Senha">
                            <input type="password" placeholder="Senha" value={senha} onChange={text=>setSenha(text.target.value)}/>
                        </label>

                        <label htmlFor="Estado">
                            <input type="text" placeholder="Estado" value={estado} onChange={text=>setEstado(text.target.value)}/>
                        </label>

                        <label htmlFor="Cidade">
                            <input type="text" placeholder="Cidade" value={cidade} onChange={text=>setCidade(text.target.value)}/>
                        </label>

                        <label htmlFor="Endereco">
                            <input type="text" placeholder="Endereco" value={endereco} onChange={text=>setEndereco(text.target.value)}/>
                        </label>

                        <label htmlFor="Telefone">
                            <input type="text"  placeholder="Telefone" value={telefone} onChange={text=>setTelefone(text.target.value)}/>
                        </label>

                    </section>

                    <section className="botoes">
                        <button className="btn-cancel">
                            Cancelar
                        </button>

                        <button onClick={handleSubmit} className="btn-concluir">
                            Concluir
                        </button>
                    </section>
                </form>
            </section>
        </div>
    )
}
