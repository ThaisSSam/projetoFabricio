import React from 'react'

const CamposEdicaoPedido = [
    {
        nome:'Código do cliente',
        classe: 'ped-cliente',
        nomeAtributo: 'customer_id'
    },
    {
        nome:'Valor total',
        classe: 'ped-valor-total',
        nomeAtributo: 'total_amount'
    },
    {
        nome:'Desconto',
        classe: 'ped-desconto',
        nomeAtributo: 'discount'
    },
    {
        nome:'Aumento',
        classe: 'ped-pedido-aumento',
        nomeAtributo: 'increase'
    },
    {
        nome:'Produtos',
        classe: 'ped-produtos',
        nomeAtributo: 'products',
        contemFilhos: true,
        filhos: [
            {
                nome: 'Identificador',
                classe: 'ped-prod-identificador',
                nomeAtributoPai: 'products',
                nomeAtributo: 'id'
            },
            {
                nome: 'Quantidade',
                classe: 'ped-prod-quantidade',
                nomeAtributoPai: 'products',
                nomeAtributo: 'quantity'
            },
            {
                nome: 'Valor unitário',
                classe: 'ped-prod-valor-unitario',
                nomeAtributoPai: 'products',
                nomeAtributo: 'unit_price'
            },
            {
                nome: 'Valor total',
                classe: 'ped-prod-valor-total',
                nomeAtributoPai: 'products',
                nomeAtributo: 'total_price'
            }
        ]
    }
]

export default CamposEdicaoPedido
