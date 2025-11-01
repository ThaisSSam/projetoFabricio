import React, { useEffect, useState } from 'react';
import Api from '../../Api';

function CadastroProdutoApi({ dadosProduto }) {
  const [produto, setProduto] = useState(dadosProduto);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (dadosProduto && Object.keys(dadosProduto).length > 0) {
      setLoading(true);
      Api
        .post("/produto/salvar", JSON.stringify(dadosProduto), {
          headers: {
            'Content-Type': 'application/json', // Definindo o Content-Type
          }
        })
        .then((response) => {
          console.log("Produto recebido da API:", response.data); // Verificando os dados
          setProduto(response.data);
        })
        .catch((err) => {
          console.error("Erro ao cadastrar produto." + err);
          setError("Ocorreu um erro ao cadastrar o produto. Tente novamente mais tarde.");
        })
        .finally(() => setLoading(false));
    }
  }, [dadosProduto]);

  if (error) {
    return <div className='erro-cadastro-prod'>{error}</div>;
  }

  if (produto && Object.keys(produto).length > 0) {
    return (
      <div className='produto-cadastrado'>
        <h3>Produto <strong>{produto.nome}</strong> cadastrado com sucesso!</h3>
      </div>
    );
  }
}


export default CadastroProdutoApi;