import { useState } from 'react';
import client from '../api/client';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await client.post('/login', { email, password });
            console.log('Full response:', response);

            // Access token from response.data.data.token
            const token = response.data.data.token;
            console.log('Received token:', token);

            localStorage.setItem('token', token);
            navigate('/app');

        } catch (err) {
            console.error('Login error:', err.response?.data || err.message);
            setError('Login failed. Check your credentials.');
        }
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="login-form">
                <h2>Colors</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>


    );
}