import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../Api';

// Custom hook that returns the product + loading and error states
const useDetalheFornecedor = () => {
  const [fornecedor, setFornecedor] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idFornecedor } = useParams();

  useEffect(() => {
    const fetchFornecedor = async () => {
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.get(`/api/vendors/${idFornecedor}`);
        setFornecedor(response.data || {});
      } catch (err) {
        console.error('Fornecedor não encontrado.', err);
        setError('Ocorreu um erro ao buscar o fornecedor. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFornecedor();
  }, [idFornecedor]);

  return { fornecedor, loading, error };
};

export default useDetalheFornecedor;