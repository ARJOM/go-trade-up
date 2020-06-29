import React, {useState} from 'react';
import api from '../../../services/api';
import Pictures from "../../../services/Pictures";

export default function CreateProduct(){

    const [name, setName] = useState("");
    const [preco, setPreco] = useState("");
    const [foto, setFoto] = useState(null);
    const [descricao, setDescricao] = useState("");

    async function handleSubmit(e){
        e.preventDefault();

        const token = localStorage.getItem("token");
        const email = localStorage.getItem("email");

        const picture = await Pictures.upload({path: 'products', uid: email, file_name: name, file: foto});

        const data = {
            market: email,
            product_name: name,
            price: preco,
            photo: picture,
            description: descricao,
        };

        try {
            const response = await api.post('products', data, {
                headers: {
                    'x-access-token': token
                }
            });
            alert("Produto cadastrado");

        } catch (err) {
            console.log(err);
            alert("Falha ao registrar produto")

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
                <form onSubmit={handleSubmit}>
                    <section className="inputs">
                        <label for="Nome">
                            Nome do produto:
                            <input type="text" className="nbreak" className="req" placeholder="Nome" value={name} onChange={text => setName(text.target.value)}/>
                        </label>

                        <label for="Preco">
                            Preco do produto:
                            <input type="text" className="break" className="req" placeholder="Preco" value={preco} onChange={text => setPreco(text.target.value)}/>
                        </label>

                        <label for="Foto">
                            Foto:
                            <input type="file" src="" alt="No Images Available" onChange={e => setFoto(e.target.files[0])}/>
                        </label>

                        <label for="Descricao">
                            Descricao:
                            <input type="text" className="break" className="req" placeholder="Quantidade" min="1" value={descricao} onChange={text => setDescricao(text.target.value)}/>
                        </label>
                    </section>

                    <section>
                        <button className="btn-cancel">
                            Cancelar
                        </button>

                        <button className="btn-concluir">
                            Salvar Alteracoes
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}
