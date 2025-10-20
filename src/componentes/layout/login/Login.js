import React, { Fragment, useState } from 'react';
import loginAdmData from '../../../loginTeste/loginAdmin.js';
import './login.css';
import ImagemPata from '../../imagens/logo-removebg-preview.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    if (email === loginAdmData.loginAdm && senha === loginAdmData.senhaAdm) {
      window.location.href = '/dashboard';
    } else {
      alert('Email ou senha incorretos!');
    }
  };

  return (
    <Fragment>
      <div className='fundo-login'>
        <div className='conteudo-login'>
          <img src={ImagemPata} className='imagem-login' alt='Logo' />
          <h1 className='nome-pagina-login'>Login</h1>

          <div className='dados-login'>
            <input
              placeholder='E-mail'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              placeholder='Senha'
              type='password'
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>

          <div className='botoes-login'>
            <button onClick={handleLogin}>Entrar</button>
            <p>Não tem conta? <a href='/cadastro'>Cadastre-se</a></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
