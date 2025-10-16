import React, { Fragment, useState } from 'react'
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-cadastro/Topo';
import DadosCadastro from '../elementos-gerais/dados-cadastro/DadosCadastro';
import CamposEdicaoFornecedor from './CamposEdicaoFornecedor';

const CadastroFornecedor = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }
  return (
    <Fragment>
          <div className='fundo-edicao-fornec'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-edicao-fornec'>
              <MenuLateral botaoClicado={botaoClicado}/>
              
              <div className='conteudo-edicao-fornec'>
                <Topo nomeObjetoModulo={'Fornecedor'}/>

                <div className='dados-fornec'>
                  <DadosCadastro camposCadastro={CamposEdicaoFornecedor}/>
                </div>

              </div>
            </div>
          </div>
    </Fragment>
  )
}

export default CadastroFornecedor

