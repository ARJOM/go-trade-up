import React, {useState} from 'react';
import api from '../../services/api';
import './style.css';
import '/Users/gabri/go-trade-up/frontend/src/global.css'
import {View, StyleSheet, Modal, Button, Text} from 'reac-native';
import {MaterialIcons} from '@expo/vector-icons';
import React, {Component} from 'react';
import { render } from 'react-dom';

export default function Home(){

return (
        <div>
            <div className="background1">
                <section className="text1">
                    <h1 className="title2"><darker>Compre diretamente a pequenos comerciantes locais</darker></h1>
                    <p className="content">Consulte os produtos dos comerciantes aqui cadastrados, adicione-os à sua lista de compras e envie o seu pedido personalizado. <br>
                    Após entrar em contato com o comerciante, você receberá o produto em sua casa, de acordo com o seu endereço registrado.</br></p>
                </section>
            </div>

            <div className="background2">
                <section className="text2">
                    <p className="content"><b>Cadastre-se como comerciante e venda seus produtos e serviços aqui.</b></p>
                </section>
            </div>

            <div className="background3">
                <section className="text3">
                    <p className="content"><b>No ato da compra ou de maneira isolada, faça doações e contribua com Instituições Parceiras.</b></p>
                </section>
            </div>

            <div className="background4">
                <section className="text4">
                    <h1 className="title2"><darker>Radar Covid-19</darker></h1>
                    <p className="content">Consulte aqui os números relativos à pandemia de Covid-19 na sua região.</p>
                        <form>
                            <p><darker>"Unidade Federativa"</darker></p>
                            <select>
                                <option selected="selected">None</option>
                                <option> PB </option>
                            </select>
                            
                            <p><darker>Cidade:</darker></p>
                            <select>
                                <option className="selected" selected="selected">None</option>
                                <option>Cajazeiras</option>
                                <option>Soledade</option>
                                <option>Campina Grande</option>
                            </select>
                            <input placeholder="Procurar" type="submit"> </input>
                        </form>
                </section>
            </div>

            <div className="background5">
                <section className="text5">
                    <h1 className="title2"><darker>SOBRE NÓS</darker></h1>
                    <p className="content">Sejam Bem Vindos ao GoTradeUp.</p>
                    <p className="content">Esse projeto foi desenvolvido no âmbito da Primeira Maratona de Programação, promovida pelo IFPB - Campus Soledade. Nós, alunos do IFPB Campus Cajazeiras, instigados pela maratona, pensamos em desenvolver uma aplicação que fomentasse o micro e pequeno empreendedorismo, um dos ramos mais afetados pela pandemia do novo coronavírus, e permitesse o direcionamento de doações feitas pelos usuários.</p>
                    <p className="content">Além de conectar comerciantes locais com seus clientes em potencial de uma forma rápida e segura, seguindo a linha de fornecimento por delivery, em alta em tempos de quarentena, a palataforma estimula a realização de doações, direcionadas a Insitutos Sociais locais ou ONGs da escolha do usuário!</p>
                    <p className="content">Fomente o comércio local e ajude os grupos mais vulneráveis a se reerguerem!</p>
                    <button className="btn-contact"><a href="">Entre em contato</a></button>
                </section>
            </div>
        </div>
    )
}