import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroFornecedorApi({ dadosFornecedor }) {
  const [fornecedor, setFornecedor] = useState(dadosFornecedor);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dadosFornecedor && Object.keys(dadosFornecedor).length > 0) {
      setLoading(true);
      Api
        .post("/fornecedor/salvar", JSON.stringify(dadosFornecedor), {
          headers: {
            'Content-Type': 'application/json', // Definindo o Content-Type
          }
        })
        .then((response) => {
          console.log("Fornecedor recebido da API:", response.data); // Verificando os dados
          setFornecedor(response.data);
        })
        .catch((err) => {
          console.error("Erro ao cadastrar fornecedor." + err);
          setError("Ocorreu um erro ao cadastrar o fornecedor. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosFornecedor]);

  if (error) {
    return <div className='erro-cadastro-forn'>{error}</div>;
  }

  if (fornecedor && Object.keys(fornecedor).length > 0) {
    return (
      <div className='fornecedor-cadastrado'>
        <h3>Fornecedor <strong>{fornecedor.nome}</strong> cadastrado com sucesso!</h3>
      </div>
    );
  }
}


export default CadastroFornecedorApi;