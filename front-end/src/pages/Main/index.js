import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';

import './index.css';

import api from '../../services/api';

import Logo from '../../assets/logo.svg';
import Dislike from '../../assets/dislike.svg';
import Like from '../../assets/like.svg';

// import { Container } from './styles';

export default function Main({ match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function loadUser() {
            const response = await api.get(`/devs`, {
                headers: { user: match.params.id }
            });
            setUsers(response.data);
        }
        loadUser();
    }, [match.params.id]);

    async function handleLike(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        });
        setUsers(users.filter(e => e._id !== id));
    }

    async function handleDislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id }
        });
        setUsers(users.filter(e => e._id !== id));
    }

    return (
        <div className="main-container">
            <Link to='/'>
                <img src={Logo} alt="TinDEV" />
            </Link>
            {users.length > 0 ?
                (<ul>
                    {/* inicio */}
                    {users.map(user =>
                        <li key={user._id}>
                            <img src={user.avatar} alt={user.name} />
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>
                            </footer>

                            <div className="buttons">
                                <button type="submit" onClick={() => handleDislike(user._id)}><img src={Dislike} alt="" /></button>
                                <button type="submit" onClick={() => handleLike(user._id)}><img src={Like} alt="" /></button>
                            </div>
                        </li>
                    )}
                    {/* fim */}
                </ul>)
                : (
                    <div className="empty">Acabou :(</div>
                )}
        </div>
    );
}
