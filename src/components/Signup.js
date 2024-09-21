import '../components/css/Signup.css';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [otp, setOtp] = useState('');
    const [isOtpSent, setIsOtpSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const auth = localStorage.getItem("local");
        if (auth) {
            navigate('/Login');
        }
    }, [navigate]);

    const fetchSignUp = async () => {
        try {
            const response = await fetch('http://localhost:3500/signup', {
                method: 'POST',
                body: JSON.stringify({ name, email, password }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            if (data.message) {
                setIsOtpSent(true);
                setErrorMessage('');
            } else {
                setErrorMessage('Error sending OTP, please try again.');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Error sending OTP, please try again.');
        }
    };

    const fetchVerifyOtp = async () => {
        try {
            const response = await fetch('http://localhost:3500/verify-otp', {
                method: 'POST',
                body: JSON.stringify({ email, otp }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const data = await response.json();
            if (data.message) {
                localStorage.setItem("local", JSON.stringify(data.user)); // Assuming user data is returned
                navigate('/Login'); // Navigate to Login after successful OTP verification
            } else {
                setErrorMessage('Invalid OTP, please try again.');
            }
        } catch (error) {
            console.log(error);
            setErrorMessage('Error verifying OTP, please try again.');
        }
    };

    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePasswordChange = (e) => setPassword(e.target.value);
    const handleOtpChange = (e) => setOtp(e.target.value);

    const handleSubmit = () => {
        if (!isOtpSent) {
            fetchSignUp();
        } else {
            fetchVerifyOtp();
        }
    };

    return (
        <div>
            <div id='signup-image-div'>
                <div id='signup-main-div'>
                    <div id='register-form'>
                        <h1>{isOtpSent ? 'Verify OTP' : 'Registration Form'}</h1>
                    </div>
                    {!isOtpSent ? (
                        <>
                            <div id='name-input'>
                                <input onChange={handleNameChange} type='text' placeholder='Enter Your Name' />
                            </div>
                            <div id='email-input'>
                                <input onChange={handleEmailChange} type='email' placeholder='Enter Your Email' />
                            </div>
                            <div id='password-input'>
                                <input onChange={handlePasswordChange} type='password' placeholder='Enter Your Password' />
                            </div>
                        </>
                    ) : (
                        <div id='otp-input'>
                            <input onChange={handleOtpChange} type='text' placeholder='Enter Your OTP' />
                        </div>
                    )}
                    <div onClick={handleSubmit} id='button-register'>
                        <button>{isOtpSent ? 'Verify OTP' : 'Submit'}</button>
                    </div>
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div id='signup-login'>
                        <p>Already Have An Account?</p>
                        <Link to='/Login'>Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
