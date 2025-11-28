import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoClienteApi({ dadosCliente }) {
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { idCliente } = useParams();

  useEffect(() => {
    if (!dadosCliente || Object.keys(dadosCliente).length === 0) return;
    console.log('EdicaoClienteApi: dadosCliente changed ->', dadosCliente);

    const doUpdate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.put(`/api/customers/${idCliente}`, dadosCliente);
      } catch (err) {
        console.error('Erro ao atualizar cliente:', err);
        setError('Ocorreu um erro ao atualizar o cliente. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doUpdate();
  }, [dadosCliente, idCliente]);

  if (loading) return <div className='loading-atualizacao-prod'>Atualizando...</div>;
  if (error) return <div className='erro-atualizacao-prod'>{error}</div>;
  if (cliente && Object.keys(cliente).length > 0) {
    const message = cliente.message || cliente.nome || 'Cliente atualizado com sucesso!';
    return (
      <div className='cliente-atualizado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}

export default EdicaoClienteApi;