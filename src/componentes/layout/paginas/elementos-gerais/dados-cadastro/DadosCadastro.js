import React, { Fragment, useState, useEffect } from 'react';
import './dados-cadastro.css';
import CadastroClienteApi from '../../../../api/CadastroClienteApi';
import CadastroFornecedorApi from '../../../../api/CadastroFornecedorApi';
import CadastroFuncionarioApi from '../../../../api/CadastroFuncionarioApi';
import CadastroProdutoApi from '../../../../api/CadastroProdutoApi';
import CadastroPedidoApi from '../../../../api/CadastroPedidoApi';

const DadosCadastro = ({ camposCadastro, modulo }) => {
  const [dadosCadastro, setDadosCadastro] = useState({});
  const [dynamicGroups, setDynamicGroups] = useState({});

  useEffect(() => {
    // Initialize dynamic groups for campos with contemFilhos
    const init = {};
    (camposCadastro || []).forEach((campo) => {
      if (campo.contemFilhos) {
        // Start with one empty group for new registrations
        const empty = {};
        (campo.filhos || []).forEach((f) => { empty[f.nomeAtributo] = ''; });
        init[campo.nomeAtributo] = [empty];
      }
    });
    setDynamicGroups(init);
  }, [camposCadastro]);

  function cadastrar(formData) {
    const novosDados = {};

    // Parse nested keys like parent[0][child]
    for (const [key, value] of formData.entries()) {
      const nestedMatch = key.match(/^([^\[]+)\[(\d+)\]\[([^\]]+)\]$/);
      if (nestedMatch) {
        const parent = nestedMatch[1];
        const idx = parseInt(nestedMatch[2], 10);
        const child = nestedMatch[3];
        novosDados[parent] = novosDados[parent] || [];
        novosDados[parent][idx] = novosDados[parent][idx] || {};
        novosDados[parent][idx][child] = value;
      } else {
        novosDados[key] = value;
      }
    }

    Object.keys(dynamicGroups).forEach((parent) => {
      if (!novosDados[parent]) {
        novosDados[parent] = dynamicGroups[parent];
      }
    });

    setDadosCadastro(novosDados);
  }

  function addGroup(parentKey, campo) {
    setDynamicGroups((prev) => {
      const arr = prev[parentKey] ? [...prev[parentKey]] : [];
      const empty = {};
      (campo.filhos || []).forEach((f) => { empty[f.nomeAtributo] = ''; });
      arr.push(empty);
      return { ...prev, [parentKey]: arr };
    });
  }

  function removeGroup(parentKey, index) {
    setDynamicGroups((prev) => {
      const arr = prev[parentKey] ? [...prev[parentKey]] : [];
      arr.splice(index, 1);
      return { ...prev, [parentKey]: arr };
    });
  }

  return (
    <Fragment>
      <form onSubmit={(e) => { 
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        cadastrar(formData); 
      }}>
        {camposCadastro.map((campo, index) => {
          if (campo.contemFilhos) {
            const groups = dynamicGroups[campo.nomeAtributo] || [];
            return (
              <div className={'conjunto-dados-cadastro dados-cadastro-' + campo.classe} key={index}>
                <p><b>{campo.nome}:</b></p>
                {
                  groups.map((group, gIdx) => (
                    <div className={'grupo-filhos ' + campo.classe} key={gIdx} style={{ marginBottom: '15px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
                      {
                        (campo.filhos || []).map((filho, idx) => (
                          <div key={idx} style={{ marginBottom: '8px' }}>
                            <label style={{ display: 'block', marginBottom: '4px', fontWeight: '500' }}>{filho.nome || filho.nomeAtributo}</label>
                            <input
                              name={`${campo.nomeAtributo}[${gIdx}][${filho.nomeAtributo}]`}
                              placeholder={filho.nome || filho.nomeAtributo}
                              style={{ width: '100%', padding: '8px', boxSizing: 'border-box', borderRadius: '3px', border: '1px solid #ccc' }}
                            />
                          </div>
                        ))
                      }
                      {groups.length > 1 && (
                        <button 
                          type="button" 
                          className={'botao-remover-campo ' + campo.classe}
                          onClick={() => removeGroup(campo.nomeAtributo, gIdx)}
                          style={{ marginTop: '8px', padding: '6px 12px', backgroundColor: '#ff4444', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                        >
                          Remover
                        </button>
                      )}
                    </div>
                  ))
                }
                <button 
                  type="button" 
                  className={'botao-adicionar-campo ' + campo.classe}
                  onClick={() => addGroup(campo.nomeAtributo, campo)}
                  style={{ marginTop: '10px', padding: '8px 16px', backgroundColor: '#4CAF50', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
                >
                  + Adicionar {campo.nome}
                </button>
              </div>
            );
          }

          return (
            <div className={'conjunto-dados-cadastro dados-cadastro-' + campo.classe} key={index}>
              <p><b>{campo.nome}:</b></p>
              <input name={campo.nomeAtributo} />
            </div>
          );
        })}

        <button className={'botao-cadastro'} type="submit">Enviar</button>
      </form>
      {modulo === 'cliente' && dadosCadastro && (
        <CadastroClienteApi dadosCliente={dadosCadastro} />
      )}

      {modulo === 'funcionario' && dadosCadastro && (
        <CadastroFuncionarioApi dadosFuncionario={dadosCadastro} />
      )}

      {modulo === 'fornecedor' && dadosCadastro && (
        <CadastroFornecedorApi dadosFornecedor={dadosCadastro} />
      )}

      {modulo === 'produto' && dadosCadastro && (
        <CadastroProdutoApi dadosProduto={dadosCadastro} onSuccess={() => setDadosCadastro({})} />
      )}

      {modulo === 'pedido' && dadosCadastro && (
        <CadastroPedidoApi dadosPedido={dadosCadastro} />
      )}

    </Fragment>
  );
};

export default DadosCadastro;
