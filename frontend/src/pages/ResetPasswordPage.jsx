import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/ResetPasswordPage.css';


const ResetPasswordPage = () => {
    const [newPassword, setNewPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleResetPassword = async () => {
        const username = localStorage.getItem('username');
        try {
            await axios.put('http://localhost:3500/api/forget/resetpassword', { username, newPassword });
            alert('Password reset successfully.');
            navigate('/login'); // Redirect to login page after successful reset
        } catch (err) {
            setError(err.response.data.msg || 'Failed to reset password');
        }
    };

    return (
        <div className="reset-password-container">
            <h1>Reset Password</h1>
            {error && <p className="error-message">{error}</p>}
            <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handleResetPassword}>Update Password</button>
        </div>
    );
};

export default ResetPasswordPage;
