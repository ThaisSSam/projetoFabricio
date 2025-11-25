import React from 'react'

const CamposListagemAcoes = [
    {
        nome:'Feedback',
        nomeAtributo: 'feedback',
        linkFeedback: '/usuario/feedback/'
    },
    {
        nome:'Alterar dados',
        nomeAtributo: 'alterar', 
        linkAlterar: '/usuario/alterar-dados/'
    },
    {
        nome:'Renovar assinatura',
        nomeAtributo: 'renovar', 
        linkRenovar: '/usuario/assinatura/renovar-assinatura/'
    },
    {
        nome:'Cancelar assinatura',
        nomeAtributo: 'cancelar', 
        linkCancelar: '/usuario/assinatura/cancelar-assinatura/'
    },
    {
        nome:'Sair',
        nomeAtributo: 'sair', 
        linkSair: '/login/'
    },
]

export default CamposListagemAcoes