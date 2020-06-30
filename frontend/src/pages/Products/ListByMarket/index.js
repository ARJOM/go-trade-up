import React, {useState} from 'react';
import api from '../../../services/api';
import './style.css'


export default function ListMarketProducts(){
    function alerta(e){
        e.preventDefault();
        alert('Você clicou!')
    }
    return (
        <div className="container-mProduct">
            <section className="esquerda">
                <h1>Lista de Produtos</h1>
                <div className="card">
                    <section className="imagem-product">
                        <img src="https://pfarma.com.br/images/stories/rivotril-medicamento-controlado.jpg" />
                        <section className="details">
                        <p><b>Nome:</b>Clonazepam</p> <br />
                            <p><b>Descrição</b>Mussum Ipsum, cacilds vidis litro abertis.
                            Quem num gosta di mim que vai caçá sua turmis! Mé faiz elementum girarzis,
                             nisi eros vermeio. Leite de capivaris, leite de mula manquis sem cabeça.
                             Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus....</p>
                            <p className="price">Preço atual: R$ 15,50</p>
                        </section>

                    </section>
                    <button className="btn-editar">Editar Produto</button>
                </div>

            </section>
            <section className="direita">
                <img onClick={alerta} src="https://cdn.pixabay.com/photo/2012/04/02/16/07/plus-24844__340.png" />
            </section>
        </div>
    )
}
