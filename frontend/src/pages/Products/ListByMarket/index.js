import React, {useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import api from '../../../services/api';
import './style.css'


export default function ListMarketProducts(){
    const [products, setProducts] = useState([]);

    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    const history = useHistory();

    useEffect(() => {
        api.get(`markets/${email}/products/`, {
            headers: {
                'x-access-token': token,
            }
        })
            .then(response => setProducts(response.data))
            .catch(err => {alert('Erro ao carregar produtos'); console.log(err)})
    }, [token, email]);

    return (
        <div className="container-mProduct">
            <section className="esquerda">
                <h1>Lista de Produtos</h1>
                <div className="card">
                    {products.map(product => (
                        <section className="imagem-product" key={product.id}>
                            <img src={product.photo}  alt="foto de perfil" height={'200'}/>
                            <section className="details">
                                <p><b>Nome:</b>{product.product_name}</p> <br />
                                <p><b>Descrição</b>{product.description}</p>
                                <p className="price">Preço atual: R$ {product.price}</p>
                            </section>
                            <button onClick={() => history.push(`/edit/product/${product.id}`)} className="btn-editar">Editar Produto</button>
                        </section>
                    ))}
                </div>

            </section>
            <section className="direita">
                <img onClick={() => history.push('/create/product')} src="https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844__340.png" />
            </section>
        </div>
    )
}
