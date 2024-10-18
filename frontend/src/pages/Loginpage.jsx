import { useRef,useState,useEffect } from "react";
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import '../css/LoginPage.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:3500/api/auth/login', { username, password });
            localStorage.setItem('token', data.token); // Store token
            //navigate('/Testpage'); // Redirect after successful login
            localStorage.setItem('username', username);// Store username
            const userRole = data.role; // Get the role from the response

             // Navigate based on the role
             switch (userRole) {
                case "Tourist":
                    navigate('/tourist-dashboard');
                    break;
                case "Tour Guide":
                    navigate('/tour-guide-dashboard');
                    break;
                case "Seller":
                    navigate('/seller-dashboard');
                    break;
                case "Advertiser":
                    navigate('/advertiser-dashboard');
                    break;
                case "Tourism Governor":
                    navigate('/governor-dashboard');
                    break;
                case "Admin":
                    navigate('/admin-dashboard');
                    break;
                default:
                    navigate('/default-page');
                    break;
             }


        } catch (err) {
            setError(err.response.data.msg || 'Login failed');
        }
    };

    return (
        <div className="login-container">
            <h1>Login</h1>
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleLogin} className="login-form">
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => {setUsername(e.target.value)}}
                    className="input-field"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                />
                <button type="submit" className="login-button">Login</button>
            </form>
            <div className="links-container">
                <Link to="/Signuppage" className="link">Don't have an account? Sign up now!</Link>
                <Link to="/otp-verification"  className="link">Forgot password?</Link>
            </div>
        </div>
    );
};

export default LoginPage;




