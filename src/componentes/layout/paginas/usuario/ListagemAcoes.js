import {React, useState, useEffect} from 'react'
import Header from '../../elementos/header/Header.js';
import MenuLateral from '../../elementos/menu-lateral/MenuLateral.js';
import './listagem-acoes.css'
import Topo from '../elementos-gerais/topo-edicao/Topo.js';

import CamposListagemAcoes from './CamposListagemAcoes.js'; 
import LinksListagem from '../elementos-gerais/links-listagem/LinksListagem.js';


const ListagemAcoes = () => {
    const [botaoClicado, setBotaoClicado ] = useState(true);
    const [dadosLista, setDadosLista] = useState([]);
    const [carregando, setCarregando] = useState(true);

    const clicarBotao = () => {
        setBotaoClicado(!botaoClicado);
    }

    useEffect(() => {
        const buscarDados = async () => {
            await new Promise(resolve => setTimeout(resolve, 500)); 
            
            const dadosMock = [
                { idAcoesUsuario: 101, feedback: 'OK', alterar: 'Detalhes', renovar: 'Vencido', cancelar: 'Ativa', sair: 'Logout' },
                { idAcoesUsuario: 102, feedback: 'Pendente', alterar: 'Editar', renovar: 'Ativa', cancelar: 'Ativa', sair: 'Logout' },
                { idAcoesUsuario: 103, feedback: 'Excelente', alterar: 'Modificar', renovar: 'Vencido', cancelar: 'Cancelada', sair: 'Logout' },
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
                        <LinksListagem 
                            camposLinks={CamposListagemAcoes}
                            nomeCampoId={'idAcoesUsuario'} 
                            modulo={'acoes'}
                            dadosLinks={dadosLista} 
                        />
                    )}

                </div>
            </div>
        </div>
    )
}

export default ListagemAcoes