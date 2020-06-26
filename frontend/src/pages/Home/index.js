import React, {useState, useEffect} from 'react';
import api from '../../services/api';
import './styles.css';


export default function Home(){
    const [estado, setEstado] = useState('AL');
    const [cidade, setCidade] = useState('');
    const [options, setOptions] = useState([]);

    async function enviar(e){
        e.preventDefault();
        const maluco = await api.get(`https://brasil.io/api/dataset/covid19/caso/data/?format=json&is_last=True&state=${estado}&city=${cidade}`)
        const base = maluco.data;
        const dados = base.results;
        console.log(dados[0])
        alert(`
            Dados colhidos na data ${dados[0].date}
            Casos confirmados: ${dados[0].confirmed}
            Mortes confirmadas: ${dados[0].deaths}
        
            `)
    }
        useEffect(()=>{

            searchh()
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [estado])

        async function searchh(){
            let resultado = await api.get(`https://brasil.io/api/dataset/covid19/caso/data/?format=json&is_last=True&state=${estado}`);
            let infos = resultado.data.results;
            setOptions(infos)
        }
    
    return (
      <div>
            <div className="background1">
                <section className="text1">
                    <h1 className="title2"><darker>Compre diretamente <br/> a pequenos comerciantes locais</darker></h1>
                    <p className="content">Consulte os produtos dos comerciantes aqui cadastrados, adicione-os à sua lista de compras e envie o seu pedido personalizado. <br />
                    Após entrar em contato com o comerciante, você receberá o produto em sua casa, de acordo com o seu endereço registrado.<br /></p>
                </section>
            </div>
            <div className="optionsHome">  
                <div className="background2">
                    <section className="text2">
                        <p className="content">Cadastre-se como comerciante e venda seus produtos e serviços aqui.</p>
                    </section>
                </div>

                <div className="background3">
                    <section className="text3">
                        <p className="content">No ato da compra ou de maneira isolada, faça doações e contribua com Instituições Parceiras.</p>
                    </section>
                </div>
            </div>
            <div className="background4">

            <div className="covid-position">
            <section className="formCorona">
            <form onSubmit={enviar} >
                <h2>Radar Covid-19</h2>
                <p>Consulte aqui a quantidade de óbitos e casos confirmados pelo Covid-19 em seu município.</p>
                <select name="estado" value={estado} onChange={e => setEstado(e.target.value)}>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MG">MG</option>
                        <option value="MS">MS</option>
                        <option value="MT">MT</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PE">PE</option>
                        <option value="PR">PR</option>
                        <option value="RJ">RJ</option>
                        <option value="RR">RR</option>
                        <option value="RS">RS</option>
                        <option value="SC">SC</option>
                        <option value="SE">SE</option>
                        <option value="SP">SP</option>
                        <option value="AM">AM</option>
                        <option value="AC">AC</option>
                        <option value="MA">MA</option>
                        <option value="PI">PI</option>
                        <option value="RN">RN</option>
                        <option value="RO">RO</option>
                        <option value="TO">TO</option>
                        <option value="DF">DF</option>
                    </select>                   
                    <div>

                    <select name="cidade" value={cidade} onChange={e => setCidade(e.target.value)}>
                        
                        
                    {options.map(ops=> (
                        <option value={ops.city} key={ops.city_ibge_code}>{ops.city}</option>
                ))}

                    </select>

                    </div>
                    <button type="submit">Ver Casos</button>
            </form>
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
                </section>
            </div>
        </div>
    )
}