import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { loginRequest } from '../actions/index';
import '../assets/styles/components/Login.scss';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

function withRouter(Component) {
function ComponentWithRouterProp(props) {
    const navigate = useNavigate();
    return (
    <Component
        {...props}
        navigate={navigate}
    />
    );
}

return ComponentWithRouterProp;
}
const Login = (props) => {
    const [form, setValues] = useState({
        email : '',
    })
    const handleInput= event => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = event => {
        event.preventDefault();
        props.loginRequest(form);
        props.navigate('/');
    }
    return (
        <>
        <Header isLogin />
        <section className="login">
            <section className="login__container">
            <div>
                <h2>Inicia sesión</h2>
                <form className="login__container--form"
                    onSubmit={handleSubmit}
                >
                <input
                    name="email"
                    className="inputform"
                    type="text"
                    placeholder="Correo"
                    onChange={handleInput}
                />
                <input
                    name="password"
                    className="inputform"
                    type="password"
                    placeholder="Contraseña"
                    onChange={handleInput}
                />
                <button className="button" type="submit">Iniciar sesión</button>
                <div className="login__container--remember-me">
                    <label>
                    <input type="checkbox" id="cbox1" value="first_checkbox" /> Recuérdame
                    </label>
                    <a href="/">Olvidé mi contraseña</a>
                </div>
                </form>
                <section className="login__container--social-media">
                <div><img src={googleIcon} /> Inicia sesión con Google</div>
                <div><img src={twitterIcon} /> Inicia sesión con Twitter</div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta {' '}
                    <Link to="/register">
                    Regístrate
                    </Link>
                </p>
            </div>
            
            </section>
        </section>
        </>
    );
}
Login.propTypes= {
    navigate: PropTypes.func,
    loginRequest: PropTypes.func,
    handleInput: PropTypes.func,
    handleSubmit: PropTypes.func,
}
const mapDispatchToProps = {
    loginRequest,
}
export default (withRouter(connect(null, mapDispatchToProps)(Login)));

