import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../../services/api';
import './styles.css';

export default function ListMarket(){
    const [markets, setMarkets] = useState([]);

    const history = useHistory();

    useEffect(() => {
        api.get('markets')
            .then(response => {setMarkets(response.data); console.log(response.data)})
            .catch(err => alert("Erro ao carregar comerciantes"))
    }, []);

    return (
        <div className="listMarket">
            <div>
                <section>
                    <h1 className="titulo"> Comerciantes </h1>
                </section>
            </div>

            <div className="content">
                {markets.map(market => (
                    <React.Fragment  key={market.email}>
                        <section className="dados">
                            <p><darker>Comércio: </darker>{market.user_name}</p>
                            <p><darker>Local de atuação: </darker>{market.city} - {market.uf}</p>
                        </section>
                        <section className="buttons">
                            <button className="btn-listprd" onClick={() => history.push(`/list/products/${market.email}`)}>Ver Produtos </button>

                            <button className="btn-contact"> Entrar em Contato </button>
                        </section>
                    </React.Fragment>
                ))}
            </div>

        </div>
    )
}
