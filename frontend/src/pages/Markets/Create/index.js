import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function CadastroComerciante(){

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [estado, setEstado] = useState();
    const [cidade, setCidade] = useState();
    const [endereco, setEndereco] = useState();
    const [telefone, setTelefone] = useState();

    async function handleSubmit(){
        const data = {
            user_name: name,
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
                        <label for="fNome">
                            Altere seu nome: 
                            <input type="text" placeholder="Nome" value={name} onChange={text=>setName(text.target.value)}></input>    
                        </label>

                        <label for="fEmail">
                            Altere seu e-mail:
                            <input type="text" placeholder="E-mail" value={email} onChange={text=>setEmail(text.target.value)} ></input>    
                        </label>

                        <label for="fSenha">
                            Altere sua senha:
                            <input type="text" placeholder="Senha" value={senha} onChange={text=>setSenha(text.target.value)}></input>    
                        </label>

                        <label for="fEstado">
                            Altere seu Estado: 
                            <input type="text" placeholder="Estado" value={estado} onChange={text=>setEstado(text.target.value)}></input>    
                        </label>

                        <label for="fCidade">
                            Altere sua cidade: 
                            <input type="text" placeholder="Cidade" value={cidade} onChange={text=>setCidade(text.target.value)}></input>    
                        </label>
                        
                        <label for="fEndereco">
                            Altere seu endereco: 
                            <input type="text" placeholder="Endereco" value={endereco} onChange={text=>setEndereco(text.target.value)}></input>    
                        </label>

                        <label for="fTelefone">
                            Altere seu telefone: 
                            <input type="text" placeholder="Telefone" value={telefone} onChange={text=>setTelefone(text.target.value)}></input>    
                        </label>

                    </section>
                    <input type="submit" value="Salvar Alteracoes"></input>

                    <section class="buttons">
                        <button className="button-cancel">
                            Cancelar
                        </button>

                        <button onClick={handleSubmit} className="button-concluir">
                            Concluir cadastro
                        </button>
                    </section>        
                </form>
            </section>        
        </div>
    )
}