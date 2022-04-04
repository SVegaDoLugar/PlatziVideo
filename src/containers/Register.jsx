import React, { useState} from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { registerRequest } from '../actions';
import '../assets/styles/components/Register.scss';
import { useNavigate } from "react-router-dom";

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
const Register = props => {
	const [form, setValues] = useState({
		name: '',
		email: '',
		password: '',
	});
	const handleInput = event => {
		setValues({
			...form,
			[event.target.name]: event.target.value,
		})
	}
	const handleSubmit = event => {
		event.preventDefault();
		props.registerRequest(form);
		props.navigate('/');
	}
    return (
		<>
		<Header isRegister/>
        <section className='register'>
			<section className='register__container'>
				<h2>Regístrate</h2>
				<form className='register__container--form' onSubmit={handleSubmit}>
					<input 
						name = 'name'
						className='input'
						type='text'
						placeholder='Nombre'
						onChange={handleInput}
					/>
					<input 
						name = 'email'
						className='input' 
						type='text' 
						placeholder='Correo'
						onChange={handleInput}
					/>
					<input
						name = 'password'
						className='input'
						type='password'
						placeholder='Contraseña'
						onChange={handleInput}
					/>
					<button className='button'>Registrarme</button>
				</form>
				<a href=''>Iniciar sesión</a>
			</section>
		</section>
		<Footer/>
		</>
    );
}

const mapDispatchToProps = {
	registerRequest,
  };

export default withRouter(connect(null, mapDispatchToProps)(Register));