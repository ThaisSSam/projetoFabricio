import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalhePedidoApi() {
  const [pedido, setPedido] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idPedido } = useParams();

  useEffect(() => {
    if (idPedido) {
      setLoading(true);
      Api
        .get(`/pedido/buscar/${idPedido}`)
        .then((response) => {
          console.log("Pedido recebido da API:", response.data); 
          setPedido(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o pedido." + err);
          setError("Ocorreu um erro ao atualizar o pedido. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return "Carregando dados do pedido..."
  }

  if (error) {
    return <div className='erro-atualizacao-pedido'>{error}</div>;
  }

  if (pedido && Object.keys(pedido).length > 0) {
    return pedido;
  }
}

export default DetalhePedidoApi;