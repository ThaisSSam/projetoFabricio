import {React,  Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import '../cliente/edicao-cliente.css';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoProduto from './CamposEdicaoProduto';
import DadosTesteEdicaoProd from './DadosTesteEdicaoProd';

const EdicaoProduto = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-cli'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-cli'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-cli'>
                <Topo nomeObjetoModulo={'Produto'} descricaoModulo={'Visualize e edite os dados do produto'}/>

                <div className='dados-prod'>
                  <DadosEdicao camposEdicao={CamposEdicaoProduto} dadosObjeto={DadosTesteEdicaoProd} modulo= 'produto'/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoProduto
