// Arquivo: LinksListagem.jsx

import React, { Fragment } from "react";
import "./links-listagem.css";
import * as FaIcon from "react-icons/fa";
import { Link } from "react-router-dom";

// 1. DADOS ESSENCIAIS: Inclui dadosLinks nos props
const LinksListagem = ({ camposLinks, nomeCampoId, modulo, dadosLinks }) => {

  // Função auxiliar para obter o conteúdo (ícone e título)
  const getActionContent = (campo) => {
    switch (campo.nomeAtributo) {
      case "feedback":
        return <FaIcon.FaComment title="Dar Feedback" />;
      case "alterar": // Usa o nomeAtributo curto
        return <FaIcon.FaEdit title="Alterar Dados" />;
      case "renovar": // Usa o nomeAtributo curto
        return <FaIcon.FaRedo title="Renovar Assinatura" />;
      case "cancelar": // Usa o nomeAtributo curto
        return <FaIcon.FaTimesCircle title="Cancelar Assinatura" />;
      case "sair": // Usa o nomeAtributo curto
        return <FaIcon.FaSignOutAlt title="Sair" />;
      default:
        // Se não for uma ação, não precisa de ícone, mas retorna o nome do campo
        return campo.nome;
    }
  };
  
  // Função para determinar o caminho do link
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

  // 2. Lógica para lista vazia
  if (!camposLinks || camposLinks.length === 0 || !dadosLinks || dadosLinks.length === 0) {
    return (
      <p className="lista-vazia-mensagem">
        Não há dados ou campos configurados para listar.
      </p>
    );
  }

  // Bloco de renderização da lista com dados
  return (
    <div className="links-listagem-container">
      {/* Cabeçalho da Lista */}
      <ul className="ul-listagem-header">
        {camposLinks.map((campo, index) => (
          <li key={index} className="li-listagem-header">
            {campo.nome}
          </li>
        ))}
      </ul>

      {/* Dados da Lista */}
      <ul className="ul-listagem-dados">
        {dadosLinks.map((dado, index) => (
          <li key={index} className="li-listagem-row">
            {camposLinks.map((campo, indexCampo) => {
              const linkId = dado[nomeCampoId];
              const linkPath = getLinkPath(campo);

              // 3. Renderiza AÇÃO se houver caminho
              if (linkPath) {
                return (
                  <span key={indexCampo} className="span-acao">
                    <Link to={linkPath + linkId} className="link-listagem-acao">
                      {getActionContent(campo)}
                    </Link>
                  </span>
                );
              }

              // 4. Renderiza DADO se não for uma ação
              // Assumindo que dados são passados como chaves em dado[nomeAtributo]
              return (
                <span key={indexCampo} className="span-listagem-campo">
                  {dado[campo.nomeAtributo] || "-"} 
                </span>
              );
            })}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LinksListagem;