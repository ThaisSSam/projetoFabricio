import {React, useState} from 'react';
import './header.css';
import ImagemHeader from '../../../imagens/logo-removebg-preview.png';
import * as MdIcons from 'react-icons/md';
import DadosTesteLogin from './DadosTesteLogin';
import { useNavigate } from "react-router-dom";

const Header = ({clicarBotao}) => {

    // TENTAR MUDAR O BOTÃO PARA O LADO ESQUERDO NO MENU LATERAL COMO NO SUAP (IDEIA DA ISA)

    const [botaoClicado, setBotaoClicado] = useState(true);

    const clicarBotaoHeader = () => {
       setBotaoClicado(!botaoClicado);
       clicarBotao(botaoClicado);
    }

    const navigate = useNavigate();

    
    const clicarBotaoUsuario = () => {
        setBotaoClicado(!botaoClicado);
        clicarBotao(botaoClicado);
        navigate('/usuario');
    }


  return (
    <div className='header'>

        <div className='nome-sistema-header'>
            <img src={ImagemHeader} className='imagem-header'/>
            <h1 className='nome-header'>Integrax</h1>
        </div>

        <div className='dados-login-header'>
            <a className='link-botao-funcionario-logado-header'>
                <button className='botao-funcionario-logado-header' onClick={clicarBotaoUsuario}>
                    <i>{<MdIcons.MdPerson/>}</i>
                </button>
            </a>
            <h2>{DadosTesteLogin.nome}</h2>
        </div>

        <div className='botoes-header'>
            <a>
                <button className='botao-menu' onClick={() => clicarBotaoHeader()}>
                    <i>{!botaoClicado ? <MdIcons.MdDehaze size={50}/> : <MdIcons.MdClose size={50}/>}</i>
                </button>
            </a>
        </div>

    </div>
  )
}

export default Header
