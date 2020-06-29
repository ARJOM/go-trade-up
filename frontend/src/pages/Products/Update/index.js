import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import Pictures from "../../../services/Pictures";

export default function EditProduct(){

    const [name, setName] = useState("");
    const [preco, setPreco] = useState("");
    const [foto, setFoto] = useState(null);
    const [descricao, setDescricao] = useState("");

    const { id } = useParams();

    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    useEffect(() => {
        api.get(`products/${id}`, {
            headers: {
                'x-access-token': token
            }
        })
            .then(response => {
                setName(response.data.name);
                setFoto(response.data.photo);
                setPreco(response.data.price);
                setDescricao(response.data.description);
            })
            .catch(err => alert("Erro ao carregar produto"))
    }, []);

    async function handleSubmit(e){
        e.preventDefault();

        const picture = await Pictures.upload({path: 'products', uid: email, file_name: name, file: foto});

        const data = {
            name: name,
            price: preco,
            photo: picture,
            description: descricao
        };

        try {
            const response = await api.put(`products/${id}`, data, {
                headers: {
                    'x-access-token': token
                }
            });
            alert("Produto atualizado");

        } catch (err) {
            console.log(err);
            alert("Falha ao atualizar produto")

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
                            <input type="text" className="nbreak" placeholder="Novo nome" value={name} onChange={text => setName(text.target.value)}/>
                        </label>

                        <label for="Novo preco">
                            Novo preco do produto:
                            <input type="text" className="break" placeholder="Novo preco" value={preco} onChange={text => setPreco(text.target.value)}/>
                        </label>

                        <label for="Nova foto">
                            Nova foto:
                            <input type="file" className="nbreak" src="" alt="No Images Available" onChange={e => setFoto(e.target.files[0])}/>
                        </label>

                        <label for="Nova descricao">
                            Nova descricao:
                            <input type="text" className="nbreak" placeholder="Nova descricao" value={descricao} onChange={text => setDescricao(text.target.value)}/>
                        </label>
                    </section>

                    <input type="submit" value="Alterar"/>

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
