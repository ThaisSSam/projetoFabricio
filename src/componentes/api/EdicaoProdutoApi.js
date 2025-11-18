import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoProdutoApi({ dadosProduto }) {
  const [produto, setProduto] = useState(dadosProduto);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idProduto } = useParams();

  useEffect(() => {
    if (dadosProduto && Object.keys(dadosProduto).length > 0) {
      setLoading(true);
      Api
        .put(`/produto/alterar/${idProduto}`, JSON.stringify(dadosProduto), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
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
  }, [dadosProduto]);

  if (error) {
    return <div className='erro-atualizacao-produto'>{error}</div>;
  }

  if (produto && Object.keys(produto).length > 0) {
    return (
      <div className='produto-atualizado'>
        <h3>Produto <strong>{produto.nome}</strong> atualizado com sucesso!</h3>
      </div>
    );
  }
}

export default EdicaoProdutoApi;