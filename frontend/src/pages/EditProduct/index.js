import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';

export default function editProduct(){

    async function handleSubmit(){
        const data = {
            name: name,
            price: preco,
            photo: foto,
            description: descricao,
            quantity: quantidade
        }
    }
    
    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Editar Produtos </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <label for="Novo nome">
                            Novo nome do produto:
                            <input type="text" className="nbreak" placeholder="Novo nome" value={name} onChange={text=>setName(text.target.value)}></input>
                        </label>

                        <label for="Novo preco">
                            Novo preco do produto:
                            <input type="text" className="break" placeholder="Novo preco" value={preco} onChange={text=>setPreco(text.target.value)}></input>
                        </label>
                        
                        <label for="Nova foto">
                            Nova foto:
                            <input type="image" className="nbreak" src="" alt="No Images Available" > </input>
                        </label>

                        <label for="Nova descricao">
                            Nova descricao:
                            <input type="text" className="nbreak" placeholder="Nova descricao" value={descricao} onChange={text=>setDescricao(text.target.value)}></input>
                        </label>

                        <label for="Nova quantidade">
                            Nova quantidade:
                            <input type="number" className="break" placeholder="Nova quantidade" min="1" value={quantidade} onChange={text=>setQuantidade(text.target.value)}></input>
                        </label>
                    </section>

                    <input type="submit" value="Alterar"></input>

                    <section className="buttons">
                        <button className="btn-cancel">
                            Cancelar
                        </button>

                        <button className="btn-excluir">
                            Excluir Produto
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