import React, { useEffect, useState } from 'react';
import Api from '../../Api';

const useListagemFornecedores = () => {
  const [fornecedores, setFornecedores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFornecedores = async () => {
      try {
        const response = await Api.get('/api/vendors');
        setFornecedores(response.data || []);
      } catch (err) {
        console.error('Nenhum fornecedor encontrado.', err);
        setError('Ocorreu um erro ao buscar os fornecedores. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFornecedores();
  }, []);

  return { fornecedores, loading, error };
};

export default useListagemFornecedores;