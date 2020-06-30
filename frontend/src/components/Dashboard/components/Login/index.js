import React, {useState, useEffect} from "react";
import { useHistory } from 'react-router-dom';
import api from "../../../../services/api";
import './styles.css';

export default function Login() {
    const history = useHistory();
    // Login states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    // Handles login e logout
    async function handleLogin(e){
        e.preventDefault();

        const data = { email, password };

        try {
            const response = await api.post('login', data);
            if (response.data.auth){
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('email', email);
                alert('Bem vindo !')
                history.push('/edit/user')
            }
        } catch (e) {
            alert("Falha ao logar");
        }
    }

    return(
        <form onSubmit={handleLogin} >
            <div  className="fundo">

            <section className="inputts">
                <label htmlFor="User-or-email">
                    <p>Email:</p>
                    <input type="text"
                           className="req"
                           placeholder="Email"
                           value={email}
                           onChange={e => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="Senha">
                    <p>Senha:</p>
                    <input type="password"
                           className="req"
                           placeholder="Senha"
                           value={password}
                           onChange={e => setPassword(e.target.value)}
                    />
                </label>
            </section>
            <section className="button">
                <button type="submit" className="btn-conclui">
                    Entrar
                </button>
            </section>
            </div>
        </form>
    )
}
