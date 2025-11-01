import React from 'react';
import * as FaIcon from 'react-icons/fa';
import ExclusaoClienteApi from '../../../../api/ExclusaoClienteApi';
import ExclusaoFuncionarioApi from '../../../../api/ExclusaoFuncionarioApi';

function BotaoExclusao({ modulo, codigo }) {
  let api;

  switch (modulo) {   
    case 'cliente':
      api = ExclusaoClienteApi;
      break;

    // case 'fornecedor':
    //   api = ExclusaoFornecedorApi;
    //   break;

    case 'funcionario':
      api = ExclusaoFuncionarioApi;
      break;

    // case 'produto ':
    //   api = ExclusaoProdutoApi;
    //   break;

    // case 'pedido':
    //   api = ExclusaoPedidoApi;
    //   break;

    default:
      api = () => {};
      break;
  }

  const { excluir, loading, error } = api();

  const handleClick = () => {
    excluir(codigo);
  };

  return (
    <button onClick={handleClick} disabled={loading}>
      <i className="icone-excluir">
        <FaIcon.FaTrash />
      </i>
      {loading && <span>Excluindo...</span>}
      {error && <div className="erro-exclusao">{error}</div>}
    </button>
  );
}

export default BotaoExclusao;
