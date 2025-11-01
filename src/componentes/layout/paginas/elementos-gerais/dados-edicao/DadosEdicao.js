import React, { Fragment, useState } from 'react';
import './dados-edicao.css'
import EdicaoClienteApi from '../../../../api/EdicaoClienteApi';
import EdicaoFornecedorApi from '../../../../api/EdicaoFornecedorApi';
import EdicaoFuncionarioApi from '../../../../api/EdicaoFuncionarioApi';
import EdicaoPedidoApi from '../../../../api/EdicaoPedidoApi';
import EdicaoProdutoApi from '../../../../api/EdicaoProdutoApi';


const DadosEdicao = ({camposEdicao, dadosObjeto, modulo}) => {
    const [dadosEdicao, setDadosEdicao] = useState({});
  
    function editar(formData) {
      const novosDados = {}; 
  
      camposEdicao.forEach((campo) => { 
        novosDados[campo.nomeAtributo] = formData.get(campo.nomeAtributo);
      });
  
      setDadosEdicao(novosDados); 
    }

  return (
    <Fragment>
      <form onSubmit={(e) => { 
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        editar(formData); 
      }}>
        {
            camposEdicao.map((campo, index) => {
                if(campo.nomeAtributoSecundario){
                    return (
                      <div className={'conjunto-dados-edicao dados-edicao-' + campo.classe}>
                      <p><b>{campo.nome}:</b></p> 
                      <input name={campo.nomeAtributo} value={dadosObjeto[campo.nomeAtributo][campo.nomeAtributoSecundario]}/>
                      </div>         
                    )
                }

                return (
                  <div className={'conjunto-dados-edicao dados-edicao-' + campo.classe}>
                  <p><b>{campo.nome}:</b></p> 
                  <input name={campo.nomeAtributo} value={dadosObjeto[campo.nomeAtributo]}/>
                  </div>         
                )
            })
        } 

        <button className={'botao-edicao'}>Enviar</button>
      </form>   
      {modulo === 'cliente' && dadosEdicao && (
        <EdicaoClienteApi dadosCliente={dadosEdicao} />
      )}

      {modulo === 'funcionario' && dadosEdicao && (
        <EdicaoFuncionarioApi dadosFuncionario={dadosEdicao} />
      )}

      {modulo === 'fornecedor' && dadosEdicao && (
        <EdicaoFornecedorApi dadosFornecedor={dadosEdicao} />
      )}

      {modulo === 'produto' && dadosEdicao && (
        <EdicaoProdutoApi dadosProduto={dadosEdicao} />
      )}

      {modulo === 'pedido' && dadosEdicao && (
        <EdicaoPedidoApi dadosPedido={dadosEdicao} />
      )}
    </Fragment>
  )
}

export default DadosEdicao
