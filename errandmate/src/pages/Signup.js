// src/pages/Signup.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signupUser, loginUser } from '../redux/actions/userActions'; // Ensure these actions are defined in your userActions file
import './Auth.css';

const Signup = () => {
    const dispatch = useDispatch();
    const { loading, error } = useSelector(state => state.user);

    const [rightPanelActive, setRightPanelActive] = useState(false);
    const [signupData, setSignupData] = useState({ name: '', email: '', password: '' });
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    const handleSignupChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };

    const handleLoginChange = (e) => {
        setLoginData({
            ...loginData,
            [e.target.name]: e.target.value
        });
    };

    const handleSignupSubmit = (e) => {
        e.preventDefault();
        dispatch(signupUser(signupData));
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser(loginData));
    };

    return (
        <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
            <div className="form-container sign-up-container">
                <form onSubmit={handleSignupSubmit}>
                    <h1>Create Account</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your email for registration</span>
                    <input type="text" name="name" placeholder="Name" value={signupData.name} onChange={handleSignupChange} />
                    <input type="email" name="email" placeholder="Email" value={signupData.email} onChange={handleSignupChange} />
                    <input type="password" name="password" placeholder="Password" value={signupData.password} onChange={handleSignupChange} />
                    <button type="submit">Sign Up</button>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                </form>
            </div>
            <div className="form-container sign-in-container">
                <form onSubmit={handleLoginSubmit}>
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                        <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" name="email" placeholder="Email" value={loginData.email} onChange={handleLoginChange} />
                    <input type="password" name="password" placeholder="Password" value={loginData.password} onChange={handleLoginChange} />
                    <a href="#">Forgot your password?</a>
                    <button type="submit">Sign In</button>
                    {loading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                </form>
            </div>
            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Errander!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
