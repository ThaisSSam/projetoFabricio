import React, { Fragment } from "react";
import "./tabela-listagem.css";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";
import BotaoExclusao from "../botao-exclusao/BotaoExclusao";

const TabelaListagem = ({ camposTabela, dadosTabela, nomeCampoId, modulo }) => {

  if (dadosTabela.length <= 0) {
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              {camposTabela.map((campo, index) => {
                return <th className="th-listagem">{campo.nome}</th>;
              })}
            </tr>

            <tr className="tr-listagem">
              <td className="td-nenhum-item-encontrado">
                Nenhum item encontrado.
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <table>
          <tbody>
            <tr>
              {camposTabela.map((campo, index) => {
                return <th className="th-listagem">{campo.nome}</th>;
              })}
            </tr>

            {dadosTabela.map((dado, index) => {
              return (
                <tr className="tr-listagem">
                  {camposTabela.map((campo, indexCampo) => {
                    if (campo.nomeAtributo === "excluir") {
                      return (
                        <td className="td-acao">
                          <BotaoExclusao modulo={modulo} codigo={dado[nomeCampoId]} />
                        </td>
                      );
                    } else if (campo.nomeAtributo === "editar") {
                      return (
                        <td className="td-acao">
                          <Link to={campo.linkEdicao + dado[nomeCampoId]}>
                            <i className="icone-editar">
                              <FaIcon.FaPen />
                            </i>
                          </Link>
                        </td>
                      );
                    } else if(campo.nomeAtributoSecundario){
                        return (
                            <td className="td-listagem">
                              {dado[campo.nomeAtributo][campo.nomeAtributoSecundario]}
                            </td>
                          );
                        } else if (campo.format) {
                          switch (campo.format) {
                            case 'data':
                              const data = new Date(dado[campo.nomeAtributo]);
                              const dia = String(data.getDate()).padStart(2, '0');
                              const mes = String(data.getMonth() + 1).padStart(2, '0');
                              const ano = data.getFullYear();
                              const horas = String(data.getHours()).padStart(2, '0');
                              const minutos = String(data.getMinutes()).padStart(2, '0');
                              const segundos = String(data.getSeconds()).padStart(2, '0');
                              const dataFormatada = `${dia}/${mes}/${ano} ${horas}:${minutos}:${segundos}`;
                              
                              return (
                                <td className="td-listagem">
                                  {dataFormatada}
                                </td>
                              );

                            case 'enum':
                              return (
                                <td className="td-listagem">
                                  {campo.enum[dado[campo.nomeAtributo]]}
                                </td>
                              );

                            default:
                              return (
                                <td className="td-listagem">
                                  {dado[campo.nomeAtributo]}
                                </td>
                              );
                          }

                        } else {
                      return (
                        <td className="td-listagem">
                          {dado[campo.nomeAtributo]}
                        </td>
                      );
                    }
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Fragment>
    );
  }
};

export default TabelaListagem;
