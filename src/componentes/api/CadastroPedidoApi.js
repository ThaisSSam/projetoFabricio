import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroPedidoApi({ dadosPedido }) {
  const [pedido, setPedido] = useState(dadosPedido);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dadosPedido && Object.keys(dadosPedido).length > 0) {
      setLoading(true);
      Api
        .post("/pedido/salvar", JSON.stringify(dadosPedido), {
          headers: {
            'Content-Type': 'application/json', // Definindo o Content-Type
          }
        })
        .then((response) => {
          console.log("Pedido recebido da API:", response.data); // Verificando os dados
          setPedido(response.data);
        })
        .catch((err) => {
          console.error("Erro ao cadastrar pedido." + err);
          setError("Ocorreu um erro ao cadastrar o pedido. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosPedido]);

  if (error) {
    return <div className='erro-cadastro-ped'>{error}</div>;
  }

  if (pedido && Object.keys(pedido).length > 0) {
    return (
      <div className='pedido-cadastrado'>
        <h3>Pedido <strong>{pedido.nome}</strong> cadastrado com sucesso!</h3>
      </div>
    );
  }
}


export default CadastroPedidoApi;