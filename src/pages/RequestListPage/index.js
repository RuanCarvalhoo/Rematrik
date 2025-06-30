import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // 1. Importa o componente Link para a navegação

// Este é o nosso componente reutilizável.
// Ele aceita um 'title' e um 'status' para saber o que buscar e exibir.
function RequestListPage({ title, status }) {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // Mock de um "banco de dados" para simular a busca de dados
  const allRequests = [
    { id: 1, matricula: 'EWB30190', nome: 'JOSÉ NUNES', curso: 'INFORMATICA', ano: '1 ANO', status: 'pendente' },
    { id: 2, matricula: 'EWB30100', nome: 'MARIA JOSE', curso: 'INFORMATICA', ano: '2 ANO', status: 'pendente' },
    { id: 3, matricula: 'EWB30060', nome: 'RUAN CARVALHO', curso: 'INFORMATICA', ano: '3 ANO', status: 'analise' },
    { id: 4, matricula: 'APB10190', nome: 'ANA SILVA', curso: 'AGROPECUÁRIA', ano: '1 ANO', status: 'concluida' },
    { id: 5, matricula: 'APB20390', nome: 'PEDRO SOUZA', curso: 'AGROPECUÁRIA', ano: '2 ANO', status: 'concluida' },
    { id: 6, matricula: 'EWB30191', nome: 'JOSIANE LIMA', curso: 'INFORMATICA', ano: '1 ANO', status: 'pendente' },
  ];

  useEffect(() => {
    const fetchRequests = async () => {
      console.log(`Buscando requisições com status: ${status}`);
      
      // TODO: Substituir esta simulação por uma chamada real à sua API
      // Ex: const response = await fetch(`/api/admin/requisicoes?status=${status}`);
      
      setTimeout(() => {
        setRequests(allRequests.filter(r => r.status === status));
        setIsLoading(false);
      }, 1000);
    };

    fetchRequests();
  }, [status]);

  // Lógica de filtro para a barra de pesquisa
  const filteredRequests = requests.filter(req => 
    req.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
    req.matricula.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="form-wrapper">
        <h1>{title.split(' ')[0]}<p>{title.split(' ').slice(1).join(' ')}</p></h1>

        <input
          type="search"
          className="search-bar"
          placeholder="Pesquisar por matrícula ou nome..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading ? (
          <p>Carregando requisições...</p>
        ) : (
          <div className="requests-list">
            {filteredRequests.length > 0 ? (
              filteredRequests.map(req => (
                // 2. Cada item da lista agora é um Link que leva para a página de detalhe
                <Link to={`/admin/requisicao/${req.id}`} key={req.id} className="request-item">
                  {`${req.matricula} | ${req.nome} | ${req.curso} | ${req.ano}`}
                </Link>
              ))
            ) : (
              <p>Nenhuma requisição encontrada.</p>
            )}
          </div>
        )}
      </div>
  );
}

export default RequestListPage;