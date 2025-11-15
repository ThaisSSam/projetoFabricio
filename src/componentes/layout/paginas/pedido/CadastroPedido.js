import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoPedido from './CamposEdicaoPedido';

const CadastroPedido = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-ped'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-ped'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-ped'>
                <Topo nomeObjetoModulo={'Pedido'}/>

                <div className='dados-ped'>
                  <DadosCadastro camposCadastro={CamposEdicaoPedido} modulo='pedido'/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroPedido

