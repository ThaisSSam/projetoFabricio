import React from 'react'
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Login from '../componentes/layout/login/Login';
import Cadastro from '../componentes/layout/cadastro-funcionario/Cadastro';
import Dashboard from '../componentes/layout/dashboard/Dashboard';

import ListagemCliente from '../componentes/layout/paginas/cliente/ListagemCliente';
import EdicaoCliente from '../componentes/layout/paginas/cliente/EdicaoCliente';
import CadastroCliente from '../componentes/layout/paginas/cliente/CadastroCliente';



import ListagemFuncionario from '../componentes/layout/paginas/funcionario/ListagemFuncionario';
import EdicaoFuncionario from '../componentes/layout/paginas/funcionario/EdicaoFuncionario';
import CadastroFuncionario from '../componentes/layout/paginas/funcionario/CadastroFuncionario';

import ListagemProduto from '../componentes/layout/paginas/produto/ListagemProduto';
import EdicaoProduto from '../componentes/layout/paginas/produto/EdicaoProduto';
import CadastroProduto from '../componentes/layout/paginas/produto/CadastroProduto';


import ListagemFornecedor from '../componentes/layout/paginas/fornecedor/ListagemFornecedor';
import EdicaoFornecedor from '../componentes/layout/paginas/fornecedor/EdicaoFornecedor';
import CadastroFornecedor from '../componentes/layout/paginas/fornecedor/CadastroFornecedor';

import ListagemPedido from '../componentes/layout/paginas/pedido/ListagemPedido';
import EdicaoPedido from '../componentes/layout/paginas/pedido/EdicaoPedido';
import CadastroPedido from '../componentes/layout/paginas/pedido/CadastroPedido';



const Rotas = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route element = {<Login/>}               path="/" exact />
          <Route element = {<Login/>}               path="/login" exact />
          <Route element = {<Cadastro/>}            path="/cadastro" exact />
          <Route element = {<Dashboard/>}           path="/dashboard" exact />
           
          <Route element = {<ListagemCliente/>}     path="/clientes" exact />
          <Route element = {<CadastroCliente/>}     path="/clientes/cadastro" exact />
          <Route element = {<EdicaoCliente/>}       path="/clientes/editar/:idCliente" exact />        
           
          <Route element = {<ListagemFuncionario/>} path="/funcionarios" exact />           
          <Route element = {<CadastroFuncionario/>}   path="/funcionarios/cadastro" exact />
          <Route element = {<EdicaoFuncionario/>}   path="/funcionarios/editar/:idFuncionario" exact />
           
          <Route element = {<ListagemFornecedor/>}  path= "/fornecedores" exact />
          <Route element = {<CadastroFornecedor/>}     path="/fornecedores/cadastro" exact />
          <Route element = {<EdicaoFornecedor/>}       path="/fornecedores/editar/:idFornecedor" exact />
                                 
          <Route element = {<ListagemProduto/>}     path= "/produtos" exact />
          <Route element = {<CadastroProduto/>}     path= "/produtos/cadastro" exact />
          <Route element = {<EdicaoProduto/>}       path= "/produtos/editar/:idProduto" exact />           
           
          <Route element = {<ListagemPedido/>}      path= "/pedidos" exact />
          <Route element = {<CadastroPedido/>}      path= "/pedidos/cadastro" exact />
          <Route element = {<EdicaoPedido/>}        path= "/pedidos/editar/:idPedido" exact />
           
           
          
          
        </Routes>
        
    </BrowserRouter>
  )
}

export default Rotas
