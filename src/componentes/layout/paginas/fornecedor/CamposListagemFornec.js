import React from 'react'

const CamposListagemFornecedor = [
    {
        nome:'Código',
        nomeAtributo: 'id'
    },
    {
        nome:'Telefone',
        nomeAtributo: 'phone'
    },
    {
        nome:'E-mail',
        nomeAtributo: 'email'
    },
    {
        nome:'Endereço',
        nomeAtributo: 'address'
    },
    {
        nome: "Tempo de Entrega (dias)",
        nomeAtributo: 'lead_time'
    },
    {
        nome:'Excluir',
        nomeAtributo: 'excluir'
    },
    {
        nome:'Editar',
        nomeAtributo: 'editar',
        linkEdicao: '/fornecedores/editar/'
    },
]

export default CamposListagemFornecedor
