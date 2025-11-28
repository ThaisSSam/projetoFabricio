import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalheClienteApi() {
  const [cliente, setCliente] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idCliente } = useParams();

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.get(`/api/customers/${idCliente}`);
        setCliente(response.data || {});
      } catch (err) {
        console.error('Cliente não encontrado.', err);
        setError('Ocorreu um erro ao buscar o cliente. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchCliente();
  }, [idCliente]);

  return { cliente, loading, error };
}

export default DetalheClienteApi;