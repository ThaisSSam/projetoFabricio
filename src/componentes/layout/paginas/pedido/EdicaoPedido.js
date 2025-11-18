import {React,  Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import './edicao-pedido.css';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoPedido from './CamposEdicaoPedido';
import DetalhePedidoApi from '../../../api/DetalhePedidoApi';

const EdicaoPedido = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const pedido = DetalhePedidoApi();

  return (
    <Fragment>
          <div className='fundo-edicao-ped'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-ped'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-ped'>
                <Topo nomeObjetoModulo={'pedido'} descricaoModulo={'Visualize e edite os dados do pedido'}/>

                <div className='dados-ped'>
                  <DadosEdicao camposEdicao={CamposEdicaoPedido} dadosObjeto={pedido} modulo={'pedido'}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoPedido
