import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from '../../Api';

function EdicaoFornecedorApi({ dadosFornecedor }) {
  const [fornecedor, setFornecedor] = useState(dadosFornecedor);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idFornecedor } = useParams();

  useEffect(() => {
    if (dadosFornecedor && Object.keys(dadosFornecedor).length > 0) {
      setLoading(true);
      Api
        .put(`/fornecedor/alterar/${idFornecedor}`, JSON.stringify(dadosFornecedor), {
          headers: {
            'Content-Type': 'application/json', 
          }
        })
        .then((response) => {
          console.log("Fornecedor recebido da API:", response.data); 
          setFornecedor(response.data);
        })
        .catch((err) => {
          console.error("Erro ao atualizar o fornecedor." + err);
          setError("Ocorreu um erro ao atualizar o fornecedor. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosFornecedor]);

  if (error) {
    return <div className='erro-atualizacao-fornecedor'>{error}</div>;
  }

  if (fornecedor && Object.keys(fornecedor).length > 0) {
    return (
      <div className='fornecedor-atualizado'>
        <h3>Fornecedor <strong>{fornecedor.nome}</strong> atualizado com sucesso!</h3>
      </div>
    );
  }
}

export default EdicaoFornecedorApi;