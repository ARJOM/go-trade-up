import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import api from '../../../services/api';

export default function ListProducts(){
    const [products, setProducts] = useState([]);
    const [name, setName] = useState("");

    const { market } = useParams();

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get(`markets/${market}/products/`, {
            headers: {
                'x-access-token': token
            }
        })
            .then(response => setProducts(response.data))
            .catch(err => alert("Erro ao carregar produtos"));
        api.get(`markets/${market}`, {
            headers: {
                'x-access-token': token
            }
        })
            .then(response => setName(response.data.user_name))
            .catch(err => alert("Erro ao carregar nome de comercio"));
    }, [market, token]);

    return (
        <div className="container-products">
            <div>
                <section >
                    <h1>  Produtos de {name} </h1>
                </section>
            </div>

            <section>
                {products.map(product => (
                        <div  className="card">
                            <section className="imagem-product">
                                    <img src={product.photo} />
                                <section className="details">
                                    <section className="detail-text">
                                        <p><b>Título:</b>{product.product_name}</p>
                                        <p><b>Descrição:</b>{product.description}</p>
                                    </section>
                                    <section>
                                    <button className="btn-editar"><a href="https://api.whatsapp.com/send?phone=558383613615"><p>Entre em contato</p></a></button>
                                    <p  className="pricee"><b>Preço</b>{product.price}</p>
                                    </section>
                                </section>
                            </section>
                        </div>
                ))}
            </section>

        </div>
    )
}
