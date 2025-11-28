import React from 'react'

const CamposListagemCliente = [
    {
        nome:'Código',
        nomeAtributo: 'id'
    },
    {
        nome:'Nome',
        nomeAtributo: 'name'
    },
    {
        nome:'E-mail',
        nomeAtributo: 'email'
    },
    {
        nome:'CPF / CNPJ',
        nomeAtributo: 'cpf_cnpj'
    },
    {
        nome:'Telefone',
        nomeAtributo: 'phone'
    },
    {
        nome:'Excluir',
        nomeAtributo: 'excluir'
    },
    {
        nome:'Editar',
        nomeAtributo: 'editar',
        linkEdicao: '/clientes/editar/'

    },
]

export default CamposListagemCliente
