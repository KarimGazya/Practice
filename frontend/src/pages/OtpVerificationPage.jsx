import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/OtpVerificationPage.css';

//check all paths 


const OtpVerificationPage = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const handleSendOtp = async () => {
        if (!username) {
            setError('Please enter your username.');
            return;
        }

        try {
            await axios.post('http://localhost:3500/api/forget/generate&sendOTP', { username });
            alert('OTP sent to your registered email.');
        } catch (err) {
            setError(err.response.data.msg || 'Failed to send OTP');
        }
    };

    const handleVerifyOtp = async () => {
        if (!otp) {
            setError('Please enter the OTP.');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3500/api/forget/verifyOTP', { username, otp });
            if (response.status === 200) {
                // Navigate to the password reset page if OTP is verified
                localStorage.setItem('username',username)
                navigate('/reset-password');
            }
        } catch (err) {
            setError(err.response.data.msg || 'Failed to verify OTP');
        }
    };

    return (
        <div className="otp-verification-container">
            <h1>Verify OTP</h1>
            {error && <p className="error-message">{error}</p>}

            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input-field"
            />
            <button onClick={handleSendOtp} className="send-otp-btn">Send OTP</button>

            <div className="spacer"></div>

            <input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="input-field"
            />
            <button onClick={handleVerifyOtp} className="verify-otp-btn">Verify OTP</button>
        </div>
    );
};

export default OtpVerificationPage;
