import React from 'react';
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import { logoutRequest } from '../actions';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Header = props =>  {
  const {user, isLogin, isRegister} = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  const headerClass = classNames('header',{
    isLogin,
    isRegister,
  });
  return (
    <header className={headerClass}>
      <img className="header__img" src={logo} alt="Platzi Video" />
      <div className="header__menu">
        <div className="header__menu--profile">
          {
            hasUser ?
            <img src={gravatar(user.email)} alt={user.email}/> : 
            <img src={userIcon} alt="" />
          }
          <p>Perfil</p>
        </div>
          {
            hasUser ? 
            <ul>
              <li><a href="/">{user.email}</a></li>
              <li><a href="/">Cuenta</a></li> 
              <li><a href="#logout" onClick={handleLogout}>Cerrar Sesión</a></li>
            </ul> :
            <ul>
              <li><a href="/Login">Iniciar sesión</a></li>
            </ul>
          }
      </div>
    </header>
  );
};
Header.propTypes = {
  user: PropTypes.object,
  logoutRequest: PropTypes.func,
  isLogin: PropTypes.bool,
  isRegister: PropTypes.bool,
};
const mapStateToProps = state => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = {
    logoutRequest,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
