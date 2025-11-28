import {React,  Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import '../cliente/edicao-cliente.css';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoFuncionario from './CamposEdicaoFuncionario';
import DetalheFuncionarioApi from '../../../api/DetalheFuncionarioApi';

const EdicaoFuncionario = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const {funcionario, loading, error} = DetalheFuncionarioApi();

  return (
    <Fragment>
          <div className='fundo-edicao-cli'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-cli'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-cli'>
                <Topo nomeObjetoModulo={'Funcionario'} descricaoModulo={'Visualize e edite os dados do funcionario'}/>

                <div className='dados-cli'>
                  <DadosEdicao camposEdicao={CamposEdicaoFuncionario} dadosObjeto={funcionario} modulo='funcionario'/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoFuncionario
