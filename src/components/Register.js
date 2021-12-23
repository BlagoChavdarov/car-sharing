import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/AuthContext';

import * as authService from '../services/authService';

const Register = () => {

     const { login } = useContext(AuthContext);

    const navigate = useNavigate();

    const onLoginHandler = (e) => {
        e.preventDefault();

        let formData = new FormData(e.currentTarget);

        let email = formData.get('email');
        let password = formData.get('password');
        let user_nm = formData.get('user_nm');

        authService.register(email, password, user_nm)
            .then((authData) => {
                console.info(authData);
                login(authData);
                
                navigate('/dashboard');
            })
            .catch(err => {
                console.log(err);
            });
    }


    return (
    <section id="login-page" className="login">
            <form id="login-form" onSubmit={onLoginHandler} method="POST">
                <fieldset>
                    <legend>Register Form</legend>
                    <p className="field">
                        <label htmlFor="email">Email</label>
                        <span className="input">
                            <input type="text" name="email" id="email" placeholder="Email" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="user_nm">User Name</label>
                        <span className="input">
                            <input type="text" name="user_nm" id="user_nm" placeholder="First Last Name" />
                        </span>
                    </p>

                    <input className="button submit" type="submit" value="Login" />
                </fieldset>
            </form>
        </section>

);

}

export default Register;