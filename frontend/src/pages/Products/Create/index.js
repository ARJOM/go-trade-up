import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function CreateProduct(){
        const [name, setName] = useState();
        const [price, setPrice] = useState();
        const [photo, setPhoto] = useState();
        const [description, setDescription] = useState();
        const [quantity, setQuantity] = useState();

    async function handleSubmit(){
        const data = {
            name,
            price ,
            photo,
            description,
            quantity,
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
                        <label>
                            Nome do produto:
                            <input type="text" className="nbreak" className="req" placeholder="Nome" value={name} onChange={text=>setName(text.target.value)}/>
                        </label>

                        <label>
                            Preço do produto:
                            <input type="text" className="break" className="req"value={price} onChange={text=>setPrice(text.target.value)}/>
                        </label>

                        <label>
                            Foto:
                            <input type="image" src="" alt="No Images Available" value={photo} onChange={e=> setPhoto(e.target.value)} />
                        </label>

                        <label>
                            Quantidade:
                            <input type="number" className="req" placeholder="Quantidade" min="1" value={quantity} onChange={text=>setQuantity(text.target.value)}/>
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
