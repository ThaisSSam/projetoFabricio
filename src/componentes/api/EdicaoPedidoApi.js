import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoPedidoApi({ dadosPedido }) {
  const [pedido, setPedido] = useState(dadosPedido);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idPedido } = useParams();

  useEffect(() => {
    if (dadosPedido && Object.keys(dadosPedido).length > 0) {
      setLoading(true);
      Api
        .put(`/pedido/alterar/${idPedido}`, JSON.stringify(dadosPedido), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
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
  }, [dadosPedido]);

  if (error) {
    return <div className='erro-atualizacao-pedido'>{error}</div>;
  }

  if (pedido && Object.keys(pedido).length > 0) {
    return (
      <div className='pedido-atualizado'>
        <h3>Pedido <strong>{pedido.nome}</strong> atualizado com sucesso!</h3>
      </div>
    );
  }
}

export default EdicaoPedidoApi;