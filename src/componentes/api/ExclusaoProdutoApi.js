import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoProdutoApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = async (idProduto) => {
    setLoading(true);
    setError(null);
    await Api.get('/sanctum/csrf-cookie');
    Api.delete(`/api/products/${idProduto}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/produtos' ;
      })
      .catch((err) => {
        setLoading(false);
        setError('Ocorreu um erro ao excluir o produto. Tente novamente.');
        console.error('Erro ao excluir o produto:', err);
      });
  };

  return { excluir, loading, error };
}

export default ExclusaoProdutoApi;
