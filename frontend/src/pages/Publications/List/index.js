import React, {useState, useEffect} from 'react';
import api from '../../../services/api';
import './style.css';

export default function ListPublication(){
    const [publications,  setPublications] = useState([]);

    const token = localStorage.getItem('token');

    useEffect(() => {
        api.get('publications/', {
            headers: {
                'x-acess-token': token,
            }
        })
            .then(response => setPublications(response.data))
            .catch(err => alert("Erro ao receber publicações"))
    }, []);

    return (
        <div className="listMarket">
            <div>
                <section>
                    <h1> Portal de Doações </h1>
                </section>
            </div>

            <div className="content">
                {publications.map(publication => (
                    <section className="dados">
                        <p>{publication.description}</p>
                    </section>
                ))}
            </div>

        </div>
    )
}
