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
            <div className="pubTop">
                <section className="title">
                    <h1> Editar Produtos </h1>
                </section>
            </div>

            <section className="pubForm">
                <form>
                    <section className="inputs">
                        <label for="Nome">
                            Novo nome do produto:
                            <input type="text" placeholder="Nome" value={name} onChange={text=>setName(text.target.value)}></input>
                        </label>

                        <label for="Preco">
                            Novo preco do produto:
                            <input type="text" placeholder="Preco" value={preco} onChange={text=>setPreco(text.target.value)}></input>
                        </label>
                        
                        <label for="Foto">
                            Nova foto:
                            <input type="image" src="" alt="No Images Available" > </input>
                        </label>

                        <label for="Descricao">
                            Nova descricao:
                            <input type="text" placeholder="Descricao" value={descricao} onChange={text=>setDescricao(text.target.value)}></input>
                        </label>

                        <label for="Quantidade">
                            Nova quantidade:
                            <input type="number" placeholder="Quantidade" min="1" value={quantidade} onChange={text=>setQuantidade(text.target.value)}></input>
                        </label>
                    </section>

                    <input type="submit" value="Alterar"></input>

                    <section>
                        <button className="cancelarAlt">
                            Cancelar
                        </button>
                        
                        <button onClick={handleSubmit} className="Alterar">
                            Salvar Alteracoes
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}