import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function EditProduct(){

    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [photo, setPhoto] = useState();
    const [description, setDescription] = useState();
    const [quantity, setQuantity] = useState();

    async function handleSubmit(){
        const data = {
            name,
            price,
            photo,
            description,
            quantity
        }
    }

    return (
        <div className="container-edit">
            <div>
                <section>
                    <h1 className="tituloo"> Editar Produtos </h1>
                </section>
            </div>

            <section className="form">
                <form>
                    <section className="inputes">
                        <label for="Novo nome">
                            Novo nome do produto:
                            <input type="text" placeholder="Novo nome" value={name} onChange={text=>setName(text.target.value)}></input>
                        </label>

                        <label for="Novo preco">
                            Novo preco do produto:
                            <input type="text" placeholder="Novo preco" value={price} onChange={text=>setPrice(text.target.value)}></input>
                        </label>

                        <label for="Nova foto">
                            Nova foto:
                            <input type="image"  src="" alt="No Images Available" value={photo} onChange={e=>setPhoto(e.target.value)} />
                        </label>

                        <label for="Nova descricao">
                            Nova descricao:
                            <input type="text"  placeholder="Nova descricao" value={description} onChange={text=>setDescription(text.target.value)}></input>
                        </label>

                        <label for="Nova quantidade">
                            Nova quantidade:
                            <input type="number"placeholder="Nova quantidade" min="1" value={quantity} onChange={text=>setQuantity(text.target.value)}></input>
                        </label>
                    </section>

                    <section className="botooes">
                        <button className="btn-cancelar">
                            Cancelar
                        </button>

                        <button className="btn-exclui">
                            Excluir Produto
                        </button>

                        <button onClick={handleSubmit} className="btn-conclu">
                            Salvar Alteracoes
                        </button>

                    </section>
                </form>
            </section>
            
        </div>
    )
}
