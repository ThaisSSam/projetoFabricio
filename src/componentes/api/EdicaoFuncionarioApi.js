import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoFuncionarioApi({ dadosFuncionario }) {
  const [funcionario, setFuncionario] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { idFuncionario } = useParams();

  useEffect(() => {
    if (!dadosFuncionario || Object.keys(dadosFuncionario).length === 0) return;
    console.log('EdicaoFuncionarioApi: dadosFuncionario changed ->', dadosFuncionario);

    const doUpdate = async () => {
      setLoading(true);
      setError(null);
      try {
        await Api.get('/sanctum/csrf-cookie');
        const response = await Api.put(`/api/users/${idFuncionario}`, dadosFuncionario);
      } catch (err) {
        console.error('Erro ao atualizar funcionario:', err);
        setError('Ocorreu um erro ao atualizar o funcionario. Tente novamente.');
      } finally {
        setLoading(false);
      }
    };

    doUpdate();
  }, [dadosFuncionario, idFuncionario]);

  if (loading) return <div className='loading-atualizacao-prod'>Atualizando...</div>;
  if (error) return <div className='erro-atualizacao-prod'>{error}</div>;
  if (funcionario && Object.keys(funcionario).length > 0) {
    const message = funcionario.message || funcionario.nome || 'Funcionario atualizado com sucesso!';
    return (
      <div className='funcionario-atualizado'>
        <h3>{message}</h3>
      </div>
    );
  }

  return null;
}

export default EdicaoFuncionarioApi;