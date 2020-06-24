import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function CreateProduct(){

    async function handleSubmit(){
        const data = {
            name: name,
            price: preco,
            photo: foto,
            description: descricao,
            quantity: quantidade,
        }
    }

    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Cadastrar Novo Produtos </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputs">
                        <label for="Nome">
                            Nome do produto:
                            <input type="text" className="nbreak" className="req" placeholder="Nome" value={name} onChange={text=>setName(text.target.value)}></input>
                        </label>

                        <label for="Preco">
                            Preco do produto:
                            <input type="text" className="break" className="req" placeholder="Preco" value={preco} onChange={text=>setPreco(text.target.value)}></input>
                        </label>

                        <label for="Foto">
                            Foto:
                            <input type="image" src="" alt="No Images Available" > </input>
                        </label>

                        <label for="Quantidade">
                            Quantidade:
                            <input type="number" className="break" className="req" placeholder="Quantidade" min="1" value={quantidade} onChange={text=>setQuantidade(text.target.value)}></input>
                        </label>
                    </section>

                    <input type="submit" value="Alterar"></input>

                    <section>
                        <button className="btn-cancel">
                            Cancelar
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
