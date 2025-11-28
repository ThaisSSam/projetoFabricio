import React, { Fragment, useState, useEffect } from 'react';
import './dados-edicao.css'
import EdicaoClienteApi from '../../../../api/EdicaoClienteApi';
import EdicaoFornecedorApi from '../../../../api/EdicaoFornecedorApi';
import EdicaoFuncionarioApi from '../../../../api/EdicaoFuncionarioApi';
import EdicaoPedidoApi from '../../../../api/EdicaoPedidoApi';
import EdicaoProdutoApi from '../../../../api/EdicaoProdutoApi';


const DadosEdicao = ({camposEdicao, dadosObjeto, modulo}) => {
  const [dadosEdicao, setDadosEdicao] = useState({});
  const [dynamicGroups, setDynamicGroups] = useState({});
  
    useEffect(() => {
      const init = {};
      (camposEdicao || []).forEach((campo) => {
        if (campo.contemFilhos) {
          const existing = dadosObjeto && dadosObjeto[campo.nomeAtributo];
          if (Array.isArray(existing) && existing.length > 0) {
            init[campo.nomeAtributo] = existing;
          } else if (existing && typeof existing === 'object' && !Array.isArray(existing)) {
            init[campo.nomeAtributo] = [existing];
          } else {
            const empty = {};
            (campo.filhos || []).forEach((f) => { empty[f.nomeAtributo] = ''; });
            init[campo.nomeAtributo] = [empty];
          }
        }
      });
      setDynamicGroups(init);
    }, [camposEdicao, dadosObjeto]);
  
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
  
    function editar(formData) {
      const novosDados = {};
  
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
  
      setDadosEdicao(novosDados);
    }

  return (
    <Fragment>
      <form key={dadosObjeto ? dadosObjeto.id : 'form'} onSubmit={(e) => { 
        e.preventDefault(); 
        const formData = new FormData(e.target); 
        editar(formData); 
      }}>
        {
            camposEdicao.map((campo, index) => {
              if (campo.filhos && campo.contemFilhos) {
                  const groups = dynamicGroups[campo.nomeAtributo] || [];
                  return (
                    <div className={'conjunto-dados-edicao dados-edicao-' + campo.classe} key={index}>
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
                                    defaultValue={
                                      group && group[filho.nomeAtributo] !== undefined
                                        ? group[filho.nomeAtributo]
                                        : ''
                                    }
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

                if(campo.nomeAtributoSecundario){
                    return (
                      <div className={'conjunto-dados-edicao dados-edicao-' + campo.classe} key={index}>
                      <p><b>{campo.nome}:</b></p> 
                      <input
                        name={campo.nomeAtributo}
                        defaultValue={
                          dadosObjeto &&
                          dadosObjeto[campo.nomeAtributo] &&
                          dadosObjeto[campo.nomeAtributo][campo.nomeAtributoSecundario] !== undefined
                            ? dadosObjeto[campo.nomeAtributo][campo.nomeAtributoSecundario]
                            : ''
                        }
                      />
                      </div>         
                    )
                }

                return (
                  <div className={'conjunto-dados-edicao dados-edicao-' + campo.classe} key={index}>
                  <p><b>{campo.nome}:</b></p> 
                  <input
                    name={campo.nomeAtributo}
                    defaultValue={
                      dadosObjeto && dadosObjeto[campo.nomeAtributo] !== undefined
                        ? dadosObjeto[campo.nomeAtributo]
                        : ''
                    }
                  />
                  </div>         
                )
            })
        } 

        <button className={'botao-edicao'}>Enviar</button>
      </form>   
      {modulo === 'cliente' && dadosEdicao && (
        <EdicaoClienteApi dadosCliente={dadosEdicao} />
      )}

      {modulo === 'funcionario' && dadosEdicao && (
        <EdicaoFuncionarioApi dadosFuncionario={dadosEdicao} />
      )}

      {modulo === 'fornecedor' && dadosEdicao && (
        <EdicaoFornecedorApi dadosFornecedor={dadosEdicao} />
      )}

      {modulo === 'produto' && dadosEdicao && (
        <EdicaoProdutoApi dadosProduto={dadosEdicao} />
      )}

      {modulo === 'pedido' && dadosEdicao && (
        <EdicaoPedidoApi dadosPedido={dadosEdicao} />
      )}
    </Fragment>
  )
}

export default DadosEdicao
