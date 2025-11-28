import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroProdutoApi({ dadosProduto, onSuccess }) {
  const [produto, setProduto] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!dadosProduto || Object.keys(dadosProduto).length === 0) return;

    const doCreate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.post('/api/products', dadosProduto);
        setProduto(response.data);
        if (onSuccess && typeof onSuccess === 'function') {
          // Give a short moment to show success message before clearing form
          setTimeout(() => onSuccess(), 750);
        }
      } catch (err) {
        console.error('Erro ao cadastrar produto:', err);
        setError('Ocorreu um erro ao cadastrar o produto. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doCreate();
  }, [dadosProduto]);

  if (loading) return <div className='loading-cadastro-prod'>Cadastrando...</div>;
  if (error) return <div className='erro-cadastro-prod'>{error}</div>;
  if (produto && Object.keys(produto).length > 0) {
    const message = produto.message || produto.nome || 'Produto cadastrado com sucesso!';
    return (
      <div className='produto-cadastrado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}


export default CadastroProdutoApi;