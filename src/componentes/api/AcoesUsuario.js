import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const AcoesUsuario = () => {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/usuario")
      .then((response) => {
        setPedidos(response.data)
      })
      .catch((err) => {
        console.error("Erro ao carregar" + err);
        setError("Ocorreu um erro ao carregar. Tente novamente mais tarde.");
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

export default AcoesUsuario;