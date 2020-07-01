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
            <div>
                <section>
                    <h1 className="tituloo"> Cadastrar Novo Produtos </h1>
                </section>
            </div>

            <section className="form">
                <form onSubmit={handleSubmit}>
                    <section className="inputes">
                    Nome do produto:
                        <label>
                            <input type="text" placeholder="Nome" value={name} onChange={text=>setName(text.target.value)}/>
                        </label>
                        Preço do produto:

                        <label>
                            <input type="text" placeholder="Preço" value={preco} onChange={text=>setPreco(text.target.value)}/>
                        </label>
                        Foto:

                        <label>
                            Foto:
                            <input type="file" src="" alt="No Images Available" onChange={e => setFoto(e.target.files[0])}/>
                        </label>
                            Descrição:

                        <label>
                            <textarea type="text"  placeholder="Descrição" value={descricao} onChange={text=>setDescricao(text.target.value)}/>

                        </label>
                    </section>

                    <section>
                        <button className="btn-cancelar">
                            Cancelar
                        </button>

                        <button type="submit" className="btn-concluir">
                            Adicionar Produto
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}
