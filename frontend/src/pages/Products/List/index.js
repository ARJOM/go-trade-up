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
    }, []);

    return (
        <div>
            <div className="top">
                <section className="title">
                    <h1> Produtos de {name} </h1>
                </section>
            </div>

            <section className="content">
                {products.map(product => (
                    <React.Fragment>
                        <img src={product.photo} alt="No images available"/>

                        <p><darker>Título:</darker>{product.product_name}</p>
                        <p><darker>Descrição:</darker>{product.description}</p>

                        <button className="btn-contact"><a href=""><p>Entre em contato</p></a></button>

                        <p><darker>Preço:</darker>{product.price}</p>

                    </React.Fragment>
                ))}
            </section>

        </div>
    )
}
