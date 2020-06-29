import React, {useState, useEffect} from "react";
import api from "../../../../services/api";

export default function Login() {
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
            }
        } catch (e) {
            alert("Falha ao logar");
        }
    }

    return(
        <form onSubmit={handleLogin}>
            <section className="inputs">
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
            <section className="buttons">
                <button type="submit" className="btn-concluir">
                    Entrar
                </button>
            </section>
        </form>
    )
}
