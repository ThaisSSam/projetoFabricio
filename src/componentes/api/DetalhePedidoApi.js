import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalhePedidoApi() {
  const [pedido, setPedido] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idPedido } = useParams();

  useEffect(() => {
    const fetchPedido = async () => {
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.get(`/api/sales/${idPedido}`);
        setPedido(response.data || {});
      } catch (err) {
        console.error('Pedido não encontrado.', err);
        setError('Ocorreu um erro ao buscar o pedido. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchPedido();
  }, [idPedido]);

  return { pedido, loading, error };
}

export default DetalhePedidoApi;