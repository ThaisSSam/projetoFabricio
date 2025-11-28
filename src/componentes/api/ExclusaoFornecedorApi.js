import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoFornecedorApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = (idFornecedor) => {
    setLoading(true);
    setError(null);
    Api.get('/sanctum/csrf-cookie');
    Api.delete(`/api/vendors/${idFornecedor}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/fornecedores' ;
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
