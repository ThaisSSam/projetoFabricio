import { useState } from 'react';
import Api from '../../Api'; 

function ExclusaoPedidoApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const excluir = async (idProduto) => {
    setLoading(true);
    setError(null);
    await Api.get('/sanctum/csrf-cookie');
    Api.delete(`/api/sales/${idProduto}`)
      .then(() => {
        setLoading(false);
        window.location.href = '/pedidos' ;
      })
      .catch((err) => {
        setLoading(false);
        setError('Ocorreu um erro ao excluir o pedido. Tente novamente.');
        console.error('Erro ao excluir o pedido:', err);
      });
  };

  return { excluir, loading, error };
}

export default ExclusaoPedidoApi;
