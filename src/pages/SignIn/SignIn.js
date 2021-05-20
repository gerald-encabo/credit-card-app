import React from 'react';
import './SignIn.scss';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { SiAdguard } from 'react-icons/si';

function SignIn() {
    return (
        <div className="sign-in">
            <div className="sign-in__wrapper">
                <div className="sign-in__container sign-in-side-1">
                    <Link to='/' className="sign-in-logo">
                        <SiAdguard />
                    </Link>
                </div>
                <div className="sign-in__container sign-in-side-2">
                    <p className="sign-in__heading">Sign in to your account</p>
                    <form action='/' className="sign-in__form">
                        <label className="sign-in__label">Email</label>
                        <input type="email" name="email" className="sign-in__input" required />
                        <label className="sign-in__label">Password</label>
                        <input type="password" name="password"  className="sign-in__input" required />
                        <Button buttonSize='btn--wide' buttonColor='blue'> Continue </Button>
                        <p className="sign-in__text">Forgot Password?</p>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SignIn
