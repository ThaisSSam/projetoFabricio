import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function EdicaoProdutoApi({ dadosProduto}) {
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { idProduto } = useParams();

  useEffect(() => {
    if (!dadosProduto || Object.keys(dadosProduto).length === 0) return;
    console.log('EdicaoProdutoApi: dadosProduto changed ->', dadosProduto);

    const doUpdate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.put(`/api/products/${idProduto}`, dadosProduto);
      } catch (err) {
        console.error('Erro ao atualizar produto:', err);
        setError('Ocorreu um erro ao atualizar o produto. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doUpdate();
  }, [dadosProduto, idProduto]);

  if (loading) return <div className='loading-atualizacao-prod'>Atualizando...</div>;
  if (error) return <div className='erro-atualizacao-prod'>{error}</div>;
  if (produto && Object.keys(produto).length > 0) {
    const message = produto.message || produto.nome || 'Produto atualizado com sucesso!';
    return (
      <div className='produto-atualizado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}

export default EdicaoProdutoApi;