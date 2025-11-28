import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroPedidoApi({ dadosPedido }) {
  const [pedido, setPedido] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dadosPedido || Object.keys(dadosPedido).length === 0) return;

    const doCreate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.post('/api/sales', dadosPedido);
        setPedido(response.data);
      } catch (err) {
        console.error('Erro ao cadastrar pedido:', err);
        setError('Ocorreu um erro ao cadastrar o pedido. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doCreate();
  }, [dadosPedido]);

  if (loading) return <div className='loading-cadastro-sale'>Cadastrando...</div>;
  if (error) return <div className='erro-cadastro-sale'>{error}</div>;
  if (pedido && Object.keys(pedido).length > 0) {
    const message = pedido.message || pedido.nome || 'Pedido cadastrado com sucesso!';
    return (
      <div className='pedido-cadastrado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}


export default CadastroPedidoApi;