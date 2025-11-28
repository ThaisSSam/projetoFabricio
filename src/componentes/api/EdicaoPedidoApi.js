import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoPedidoApi({ dadosPedido }) {
  const [pedido, setPedido] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { idPedido } = useParams();

  useEffect(() => {
    if (!dadosPedido || Object.keys(dadosPedido).length === 0) return;
    console.log('EdicaoPedidoApi: dadosPedido changed ->', dadosPedido);

    const doUpdate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.put(`/api/sales/${idPedido}`, dadosPedido);
      } catch (err) {
        console.error('Erro ao atualizar pedido:', err);
        setError('Ocorreu um erro ao atualizar o pedido. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doUpdate();
  }, [dadosPedido, idPedido]);

  if (loading) return <div className='loading-atualizacao-prod'>Atualizando...</div>;
  if (error) return <div className='erro-atualizacao-prod'>{error}</div>;
  if (pedido && Object.keys(pedido).length > 0) {
    const message = pedido.message || pedido.nome || 'Pedido atualizado com sucesso!';
    return (
      <div className='pedido-atualizado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}

export default EdicaoPedidoApi;