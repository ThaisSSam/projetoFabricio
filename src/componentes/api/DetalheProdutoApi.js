import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Api from '../../Api';

// Custom hook that returns the product + loading and error states
const useDetalheProduto = () => {
  const [produto, setProduto] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idProduto } = useParams();

  useEffect(() => {
    const fetchProduto = async () => {
      try {
        const response = await Api.get(`/api/products/${idProduto}`);
        setProduto(response.data || {});
      } catch (err) {
        console.error('Produto não encontrado.', err);
        setError('Ocorreu um erro ao buscar o produto. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduto();
  }, [idProduto]);

  return { produto, loading, error };
};

export default useDetalheProduto;