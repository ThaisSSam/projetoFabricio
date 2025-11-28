import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function EdicaoFornecedorApi({ dadosFornecedor}) {
  const [fornecedor, setFornecedor] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { idFornecedor } = useParams();

  useEffect(() => {
    if (!dadosFornecedor || Object.keys(dadosFornecedor).length === 0) return;
    console.log('EdicaoFornecedorApi: dadosFornecedor changed ->', dadosFornecedor);

    const doUpdate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.put(`/api/vendors/${idFornecedor}`, dadosFornecedor);
      } catch (err) {
        console.error('Erro ao atualizar fornecedor:', err);
        setError('Ocorreu um erro ao atualizar o fornecedor. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doUpdate();
  }, [dadosFornecedor, idFornecedor]);

  if (loading) return <div className='loading-atualizacao-prod'>Atualizando...</div>;
  if (error) return <div className='erro-atualizacao-prod'>{error}</div>;
  if (fornecedor && Object.keys(fornecedor).length > 0) {
    const message = fornecedor.message || fornecedor.nome || 'Fornecedor atualizado com sucesso!';
    return (
      <div className='fornecedor-atualizado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}

export default EdicaoFornecedorApi;