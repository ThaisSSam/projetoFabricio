import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoFornecedorApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = (idFornecedor) => {
    setLoading(true);
    setError(null);

    Api.delete(`/fornecedor/excluir/${idFornecedor}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/fornecedors' ;
      })
      .catch((err) => {
        setLoading(false);
        setError('Ocorreu um erro ao excluir o fornecedor. Tente novamente.');
        console.error('Erro ao excluir o fornecedor:', err);
      });
  };

  return { excluir, loading, error };
}

export default ExclusaoFornecedorApi;
