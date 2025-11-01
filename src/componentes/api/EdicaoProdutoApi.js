import {React,  Fragment, useState } from 'react';
import Header from '../layout/elementos/header/Header';
import MenuLateral from '../layout/elementos/menu-lateral/MenuLateral';
import Topo from '../layout/paginas/elementos-gerais/topo-edicao/Topo';
import '../layout/paginas/cliente/edicao-cliente.css';
import DadosEdicao from '../layout/paginas/elementos-gerais/dados-edicao/DadosEdicao';
import CamposEdicaoProduto from '../layout/paginas/produto/CamposEdicaoProduto';
import DetalheProdutoApi from '../api/DetalheProdutoApi';

const EdicaoProduto = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const produto = DetalheProdutoApi();

  return (
    <Fragment>
          <div className='fundo-edicao-cli'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-cli'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-cli'>
                <Topo nomeObjetoModulo={'Produto'} descricaoModulo={'Visualize e edite os dados do produto'}/>

                <div className='dados-cli'>
                  <DadosEdicao camposEdicao={CamposEdicaoProduto} dadosObjeto={produto} modulo= 'produto'/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default EdicaoProduto
