import { useEffect, useState } from 'react';
import Api from '../../Api';

const useListagemProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProdutos = async () => {
      try {
        const response = await Api.get('/api/products');
        setProdutos(response.data || []);
      } catch (err) {
        console.error('Nenhum produto encontrado.', err);
        setError('Ocorreu um erro ao buscar os produtos. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProdutos();
  }, []);

  return { produtos, loading, error };
};

export default useListagemProdutos;