import React, { Fragment, useState } from 'react'
import CamposEdicaoFornecedor from './CamposEdicaoFornecedor';
import DadosTesteEdicaoFornec from './DadosTesteEdicaoFornecedor';
import Header from '../../elementos/header/Header';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral';
import Topo from '../elementos-gerais/topo-edicao/Topo';
import DadosEdicao from '../elementos-gerais/dados-edicao/DadosEdicao';
import './edicao-fornecedor.css'
import DetalheFornecedorApi from '../../../api/DetalheFornecedorApi';


const EdicaoFornecedor = () => {
  const [botaoClicado, setBotaoClicado ] = useState(true);

  const clicarBotao = () => {
      setBotaoClicado(!botaoClicado);
  }

  const fornecedor = DetalheFornecedorApi();
      
  return (
    <Fragment>
      <div className='fundo-edicao-fornec'>
        <Header clicarBotao={clicarBotao}/>
        <div className='conteudo-pagina-edicao-fornec'>
          <MenuLateral botaoClicado={botaoClicado}/>
          
          <div className='conteudo-edicao-fornec'>
            <Topo nomeObjetoModulo={'Fornecedor'} descricaoModulo={'Visualize e edite os dados do fornecedor'}/>

            <div className='dados-fornec'>
              <DadosEdicao camposEdicao={CamposEdicaoFornecedor} dadosObjeto={DadosTesteEdicaoFornec} modulo={'fornecedor'}/>
            </div>

          </div>
        </div>
      </div>
  </Fragment>
  )
}

export default EdicaoFornecedor
