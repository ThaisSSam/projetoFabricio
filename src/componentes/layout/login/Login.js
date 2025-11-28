import React, { Fragment, useState } from 'react';
import './login.css';
import ImagemPata from '../../imagens/logo-removebg-preview.png';
import LoginApi from '../../api/LoginApi.js';

function Login () {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className='botoes-login'>
            <button
              onClick={async () => {
                setLoading(true);
                setError(null);
                try {
                  await LoginApi({ email, password });
                } catch (err) {
                  console.error(err);
                  setError('Erro ao fazer login. Verifique suas credenciais.');
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
            >
              {loading ? 'Entrando...' : 'Entrar'}
            </button>
            {error && <div className='erro-login'>{error}</div>}
            <p>Não tem conta? <a href='/cadastro'>Cadastre-se</a></p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
