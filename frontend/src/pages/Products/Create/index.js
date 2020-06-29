import React, {useState} from 'react';
import api from '../../../services/api';
import './styles.css';

export default function CreateProduct(){
        const [name, setName] = useState();
        const [price, setPrice] = useState();
        const [photo, setPhoto] = useState();
        const [description, setDescription] = useState();

    async function handleSubmit(){
        const data = {
            name,
            price ,
            photo,
            description,
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
                <form>
                    <section className="inputes">
                    Nome do produto:
                        <label>
                            <input type="text" placeholder="Nome" value={name} onChange={text=>setName(text.target.value)}/>
                        </label>
                        Preço do produto:

                        <label>
                            <input type="text" placeholder="Preço" value={price} onChange={text=>setPrice(text.target.value)}/>
                        </label>
                        Foto:

                        <label>
                            <input type="file" alt="No Images Available" value={photo} onChange={e=> setPhoto(e.target.value)} />
                        </label>
                            Descrição:

                        <label>
                            <textarea type="text"  placeholder="Descrição" value={description} onChange={text=>setDescription(text.target.value)}/>
                        </label>
                    </section>

                    <section>
                        <button className="btn-cancelar">
                            Cancelar
                        </button>

                        <button onClick={handleSubmit} className="btn-concluir">
                            Adicionar Produto
                        </button>

                    </section>
                </form>
            </section>
        </div>
    )
}
