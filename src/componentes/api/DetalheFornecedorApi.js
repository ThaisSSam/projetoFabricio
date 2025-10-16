import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalheFornecedorApi() {
  const [fornecedor, setFornecedor] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idFornecedor } = useParams();

  useEffect(() => {
    if (idFornecedor) {
      setLoading(true);
      Api
        .get(`/fornecedor/buscar/${idFornecedor}`)
        .then((response) => {
          console.log("Fornecedor recebido da API:", response.data); 
          setFornecedor(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o fornecedor." + err);
          setError("Ocorreu um erro ao atualizar o fornecedor. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return "Carregando dados do fornecedor..."
  }

  if (error) {
    return <div className='erro-atualizacao-fornecedor'>{error}</div>;
  }

  if (fornecedor && Object.keys(fornecedor).length > 0) {
    return fornecedor;
  }
}

export default DetalheFornecedorApi;