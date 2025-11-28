import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function DetalheFuncionarioApi() {
  const [funcionario, setFuncionario] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idFuncionario } = useParams();

  useEffect(() => {
    const fetchFuncionario = async () => {
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.get(`/api/users/${idFuncionario}`);
        setFuncionario(response.data || {});
      } catch (err) {
        console.error('Funcionario não encontrado.', err);
        setError('Ocorreu um erro ao buscar o funcionario. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchFuncionario();
  }, [idFuncionario]);

  return { funcionario, loading, error };
}

export default DetalheFuncionarioApi;