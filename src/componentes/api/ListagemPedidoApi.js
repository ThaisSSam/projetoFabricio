import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemPedidosApi = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/pedido/listar")
      .then((response) => {
        setPedidos(response.data)
      })
      .catch((err) => {
        console.error("Nenhum pedido encontrado." + err);
        setError("Ocorreu um erro ao buscar os pedidos. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return []
  }

  if (error) {
    return []
  }

  return pedidos;
};

export default ListagemPedidosApi;