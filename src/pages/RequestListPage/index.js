import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';       // 1. Importar axios
import Cookies from 'js-cookie'; // 2. Importar Cookies para pegar o token

// Este é o nosso componente reutilizável.
function RequestListPage({ title, status }) {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(''); // Estado para guardar erros

  // REMOVA a variável allRequests que continha os dados mockados.

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      setError('');
      
      try {
        const authToken = Cookies.get('adminAuth'); // 3. Pega o token do cookie
        if (!authToken) {
          throw new Error('Usuário não autenticado.');
        }

        // 4. Faz a chamada real para a API
        const response = await axios.get(`http://localhost:8080/api/admin/requisicoes?status=${status}`, {
            headers: {
                'Authorization': `Basic ${authToken}`
            }
        });

        // 5. Atualiza o estado com os dados recebidos do backend
        setRequests(response.data);

      } catch (err) {
        console.error(`Erro ao buscar requisições com status: ${status}`, err);
        setError('Falha ao carregar os dados. Tente novamente mais tarde.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRequests();
  }, [status]);

  // Lógica de filtro para a barra de pesquisa (continua igual)
  const filteredRequests = requests.filter(req => 
    (req.nome && req.nome.toLowerCase().includes(searchTerm.toLowerCase())) ||
    (req.matricula && req.matricula.toLowerCase().includes(searchTerm.toLowerCase()))
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
        ) : error ? (
          <p className="error-message">{error}</p> // Mostra a mensagem de erro
        ) : (
          <div className="requests-list">
            {filteredRequests.length > 0 ? (
              filteredRequests.map(req => (
                <Link to={`/admin/requisicao/${req.id}`} key={req.id} className="request-item">
                  {/* Usa os dados vindos da API. Atenção aos nomes dos campos! */}
                  {`${req.matricula} | ${req.nome} | ${req.curso ? req.curso.codigoCurso : ''} | ${req.anoSemestre}`}
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