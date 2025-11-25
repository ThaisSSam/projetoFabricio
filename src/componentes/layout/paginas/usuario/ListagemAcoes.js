// Arquivo: ListagemAcoes.jsx

import {React, useState, useEffect} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-acoes.css'
import Topo from '../elementos-gerais/topo-listagem/Topo.js';

// 1. CORREÇÃO: Usando a importação do array de campos/ações de ACOES
import CamposListagemAcoes from './CamposListagemAcoes.js'; 
import LinksListagem from '../elementos-gerais/links-listagem/LinksListagem.js';


const ListagemAcoes = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);
    // 2. Estado para armazenar os dados dos acoess/ações
    const [dadosLista, setDadosLista] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }
    
    // 3. Simulação de busca de dados (substitua pela sua API)
    useEffect(() => {
        const buscarDados = async () => {
            await new Promise(resolve => setTimeout(resolve, 500)); 
            
            // Dados de Exemplo (Note as chaves: idAcoesUsuario, feedback, alterar, etc.)
            const dadosMock = [
                { idAcoesUsuario: 101, feedback: 'OK', alterar: 'Detalhes', renovar: 'Vencido', cancelar: 'Ativa', sair: 'Logout' },
                { idAcoesUsuario: 102, feedback: 'Pendente', alterar: 'Editar', renovar: 'Ativa', cancelar: 'Ativa', sair: 'Logout' },
                // ... outros dados reais da API
            ];
            
            setDadosLista(dadosMock);
            setCarregando(false);
        };

        buscarDados();
    }, []);

    
    return (
        <div className='fundo-listagem-acoes-usuario'>
            <Header clicarBotao={clicarBotao}/>
            <div className='conteudo-pagina-listagem-acoes-usuario'>
                <MenuLateral botaoClicado={botaoClicado}/>
                
                <div className='conteudo-listagem-acoes-usuario'>

                    <Topo 
                        nomeModulo={'acoes-usuario'}
                        descricaoModulo={'Feedback e ações dos usuários do sistema'}
                        caminhoModulo={'/usuario'}
                    />
                    
                    {carregando ? (
                        <p>Carregando dados...</p>
                    ) : (
                        // 4. CORREÇÃO: Passando o array de campos e os DADOS para o LinksListagem
                        <LinksListagem 
                            camposLinks={CamposListagemAcoes} // Usando o array de configuração correto
                            nomeCampoId={'idAcoesUsuario'} 
                            modulo={'acoes'}
                            dadosLinks={dadosLista} // Passando o array de dados (estado)
                        />
                    )}

                </div>
            </div>
        </div>
    )
}

export default ListagemAcoes