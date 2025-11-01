import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalheProdutoApi() {
  const [produto, setProduto] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idProduto } = useParams();

  useEffect(() => {
    if (idProduto) {
      setLoading(true);
      Api
        .get(`/produto/buscar/${idProduto}`)
        .then((response) => {
          console.log("Produto recebido da API:", response.data); 
          setProduto(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o produto." + err);
          setError("Ocorreu um erro ao atualizar o produto. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, []);

  if (loading) {
    return "Carregando dados do produto..."
  }

  if (error) {
    return <div className='erro-atualizacao-produto'>{error}</div>;
  }

  if (produto && Object.keys(produto).length > 0) {
    return produto;
  }
}

export default DetalheProdutoApi;