import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css';

export default function ListProducts(){

    return (
        <div className="container-products">
            <div>
                <section>
                    <h1> Produtos do COMERCIANTE </h1>
                </section>
            </div>

            <div className="card">
                    <section className="imagem-product">
                        <img src="https://pfarma.com.br/images/stories/rivotril-medicamento-controlado.jpg" />
                        <section className="details">
                        <p><b>Nome:</b>Clonazepam</p> <br />
                            <p><b>Descrição</b>Mussum Ipsum, cacilds vidis litro abertis. 
                            Quem num gosta di mim que vai caçá sua turmis! Mé faiz elementum girarzis,
                             nisi eros vermeio. Leite de capivaris, leite de mula manquis sem cabeça. 
                             Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus....</p>
                             <button className="btn-editar">Editar Produto</button>
                             <p className="pricee">Preço atual: R$ 15,50</p>
                        </section>
                       
                    </section>
                </div>

        </div>
    )
}
