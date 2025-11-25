// Arquivo: CamposListagemAcoes.js

import React from 'react'

const CamposListagemAcoes = [
    {
        nome:'Feedback',
        nomeAtributo: 'feedback', // Chave usada na lógica do LinksListagem
        linkFeedback: '/usuario/feedback/'
    },
    {
        nome:'Alterar dados',
        nomeAtributo: 'alterar', // Chave usada na lógica do LinksListagem
        linkAlterar: '/usuario/alterar-dados/'
    },
    {
        nome:'Renovar assinatura',
        nomeAtributo: 'renovar', // Chave usada na lógica do LinksListagem
        linkRenovar: '/usuario/assinatura/renovar-assinatura/'
    },
    {
        nome:'Cancelar assinatura',
        nomeAtributo: 'cancelar', // Chave usada na lógica do LinksListagem
        linkCancelar: '/usuario/assinatura/cancelar-assinatura/'
    },
    {
        nome:'Sair',
        nomeAtributo: 'sair', // Chave usada na lógica do LinksListagem
        linkSair: '/login/'
    },
]

export default CamposListagemAcoes