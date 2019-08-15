import React, { useState } from 'react';
import './index.css';

import Logo from '../../assets/logo.svg';

import api from '../../services/api';

// import { Container } from './styles';

export default function Login(props) {
    let history = props.history;
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();
        if (username.length > 3) {
            const response = await api.post('/devs', {
                username
            });
            const { _id } = response.data;
            history.push(`/dev/${_id}`);
        }
        console.log(username);
    }

    return (
        <div className='login-container'>
            <form onSubmit={handleSubmit}>
                <img src={Logo} alt="TinDEV" />

                <input
                    type="text"
                    placeholder="Digite seu usuário no github"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />

                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}
