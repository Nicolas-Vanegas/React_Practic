import React from 'react';

import '../assets/styles/components/Header.scss';
/* Para poder usar elementos multimedia con Webpack debemos ejecutar npm i file-loader --save-dev*/
import logoHeader from '../assets/images/logo-platzi-video-BW2.png';
import icon from '../assets/images/user-icon.png';

const Header = () => (
  <header className='header'>
    <img className='header__img' src={logoHeader} alt='Platzi Video' />
    <div className='header__menu'>
      <div className='header__menu--profile'>
        <img src={icon} alt='' />
        <p>Perfil</p>
      </div>
      <ul>
        <li>
          <a href='/'>Cuenta</a>
        </li>
        <li>
          <a href='/'>Cerrar Sesión</a>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;
