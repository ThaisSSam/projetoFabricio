// Arquivo: LinksListagem.jsx

import React, { Fragment } from "react";
import "./links-listagem.css";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";

const LinksListagem = ({ camposLinks, nomeCampoId, modulo, dadosLinks }) => {

  const getActionContent = (campo) => {
    switch (campo.nomeAtributo) {
      case "feedback":
        return <FaIcon.FaComment title="Dar Feedback" />;
      case "alterar":
        return <FaIcon.FaEdit title="Alterar Dados" />;
      case "renovar":
        return <FaIcon.FaRedo title="Renovar Assinatura" />;
      case "cancelar":
        return <FaIcon.FaTimesCircle title="Cancelar Assinatura" />;
      case "sair":
        return <FaIcon.FaSignOutAlt title="Sair" />;
      default:
        return campo.nome;
    }
  };

  const getLinkPath = (campo) => {
    switch (campo.nomeAtributo) {
      case "feedback":
        return campo.linkFeedback;
      case "alterar":
        return campo.linkAlterar;
      case "renovar":
        return campo.linkRenovar;
      case "cancelar":
        return campo.linkCancelar;
      case "sair":
        return campo.linkSair;
      default:
        return null;
    }
  };

  if (!camposLinks || camposLinks.length === 0 || !dadosLinks || dadosLinks.length === 0) {
    return (
      <p className="lista-vazia-mensagem">
        Não há dados ou campos configurados para listar.
      </p>
    );
  }

  return (
    <div className="links-listagem-container">
      <ul className="ul-listagem-header">
        {camposLinks.map((campo, index) => {
          const linkPath = getLinkPath(campo);

          return (
            <li key={index} className="li-listagem-header">
              {linkPath ? (
                <Fragment>
                  <Link to={linkPath} className="link-header-acao">
                    {getActionContent(campo)}
                  </Link>
                  <span className="nome-campo-header-acao">
                    {campo.nome}
                  </span>
                </Fragment>
              ) : (
                <Fragment>
                  {campo.nome}
                </Fragment>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinksListagem;