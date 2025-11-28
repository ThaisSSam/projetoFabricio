import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemClientesApi = () => {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await Api.get('/api/customers');
        setClientes(response.data || []);
      } catch (err) {
        console.error('Nenhum cliente encontrado.', err);
        setError('Ocorreu um erro ao buscar os clientes. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  return { clientes, loading, error };
};

export default ListagemClientesApi;