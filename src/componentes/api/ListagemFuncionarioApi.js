import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const ListagemFuncionariosApi = () => {
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        const response = await Api.get('/api/users');
        setFuncionarios(response.data || []);
      } catch (err) {
        console.error('Nenhum fornecedor encontrado.', err);
        setError('Ocorreu um erro ao buscar os funcionarios. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionarios();
  }, []);

  return { funcionarios, loading, error };
};

export default ListagemFuncionariosApi;