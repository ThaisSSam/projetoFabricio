import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemFornecedoresApi = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    Api.get("/fornecedor/listar")
      .then((response) => {
        setFornecedores(response.data)
      })
      .catch((err) => {
        console.error("Nenhum fornecedor encontrado." + err);
        setError("Ocorreu um erro ao buscar os fornecedores. Tente novamente mais tarde.");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return []
  }

  if (error) {
    return []
  }

  return fornecedores;
};

export default ListagemFornecedoresApi;