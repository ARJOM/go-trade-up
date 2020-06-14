import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function CadastroComerciante(){

    const [nome, setName] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [estado, setEstado] = useState();
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
        try{
            const response = await api.post('users', data);
            alert('Cadastro de Comerciante realizado com sucesso!');
        }catch(err){
            alert('Erro no cadastro. Tente novamente.', err)
        }
    }

    return(
        <div>
            <div className="cadTop">
                <section className="title">
                    <h1>Cadastre-se como Comerciante</h1>
                </section>
            </div>

            <section className="form">
                <form type="submit">
                    <section class="inputs">
                        <label for="Nome">
                            Nome: 
                            <input type="text" placeholder="Nome" value={nome} onChange={text=>setName(text.target.value)}></input>    
                        </label>

                        <label for="Email">
                            Email:
                            <input type="text" placeholder="E-mail" value={email} onChange={text=>setEmail(text.target.value)} ></input>    
                        </label>

                        <label for="Senha">
                            Senha:
                            <input type="text" placeholder="Senha" value={senha} onChange={text=>setSenha(text.target.value)}></input>    
                        </label>

                        <label for="Estado">
                            Estado: 
                            <input type="text" placeholder="Estado" value={estado} onChange={text=>setEstado(text.target.value)}></input>    
                        </label>

                        <label for="Cidade">
                            Cidade: 
                            <input type="text" placeholder="Cidade" value={cidade} onChange={text=>setCidade(text.target.value)}></input>    
                        </label>
                        
                        <label for="Endereco">
                            Endereco: 
                            <input type="text" placeholder="Endereco" value={endereco} onChange={text=>setEndereco(text.target.value)}></input>    
                        </label>

                        <label for="Telefone">
                            Telefone para contato: 
                            <input type="text" placeholder="Telefone" value={telefone} onChange={text=>setTelefone(text.target.value)}></input>    
                        </label>

                    </section>
                    <input type="submit" value="Cadastrar"></input>

                    <section class="buttons">
                        <button className="button-cancel">
                            Cancelar
                        </button>

                        <button onClick={handleSubmit} className="button-concluir">
                            Concluir Cadastro
                        </button>
                    </section>        
                </form>
            </section>        
        </div>
    )
}