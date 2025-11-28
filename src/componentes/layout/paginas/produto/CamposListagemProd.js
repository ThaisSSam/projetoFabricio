import React from 'react'

const CamposListagemProduto = [
    {
        nome:'Código',
        nomeAtributo: 'id'
    },
    {
        nome:'Nome',
        nomeAtributo: 'name'
    },
    {
        nome:'Estoque',
        nomeAtributo: 'stock'
    },
    {
        nome:'Preço',
        nomeAtributo: 'price'
    },
    {
        nome:'Custo',
        nomeAtributo: 'cost'
    },
    {
        nome:'Código Fornecedor',
        nomeAtributo:'vendor_id'

    },
    {
        nome:'Excluir',
        nomeAtributo: 'excluir'
    },
    {
        nome:'Editar',
        nomeAtributo: 'editar',
        linkEdicao: '/produtos/editar/'
    },
]

export default CamposListagemProduto
