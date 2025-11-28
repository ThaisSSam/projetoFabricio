import React from 'react'

const CamposListagemPedido = [
    {
        nome:'Código',
        nomeAtributo: 'id'
    },
    {
        nome:'Código do cliente',
        nomeAtributo: 'customer_id'
    },
    {
        nome:'Código do funcionário',
        nomeAtributo: 'created_by'
    },
    {
        nome:'Total do pedido',
        nomeAtributo: 'total_amount'
    },
    {
        nome:'Status',
        nomeAtributo: 'status',
        format: 'enum',
        enum: {
            "pending": "Pendente",
            "completed": "Concluído",
            "canceled": "Cancelado"
        }
    },
    {
        nome:'Data de criação',
        nomeAtributo: 'created_at',
        format: 'data'
    },
    {
        nome:'Excluir',
        nomeAtributo: 'excluir'
    },
    {
        nome:'Editar',
        nomeAtributo: 'editar',
        linkEdicao: '/pedidos/editar/'
    },
]

export default CamposListagemPedido
