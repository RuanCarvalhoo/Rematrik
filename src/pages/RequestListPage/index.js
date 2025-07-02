import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function RequestListPage({ title, status }) {
  const [requests, setRequests] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRequests = async () => {
      setIsLoading(true);
      setError('');

      try {
        const authToken = Cookies.get('adminAuth');
        if (!authToken) {
          throw new Error('Usuário não autenticado.');
        }

        const response = await axios.get(`http://localhost:8080/api/admin/requisicoes?status=${status}`, {
            headers: { 'Authorization': `Basic ${authToken}` }
        });

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

  // Função para formatar a linha de exibição da requisição
  const formatRequestDisplay = (req) => {
    const { matricula, nome, anoSemestre, disciplinas } = req;
    
    let cursoDisplay = '';
    let anoFormatado = anoSemestre;

    if (disciplinas && disciplinas.length > 0 && disciplinas[0].curso) {
      const curso = disciplinas[0].curso;
      cursoDisplay = curso.nomeCurso;

      if (curso.nomeCurso && curso.nomeCurso.includes('INTEGRADO')) {
        anoFormatado = `${anoSemestre}º Ano`;
      } else {
        anoFormatado = `${anoSemestre}º Semestre`;
      }
    }

    return `${matricula} | ${nome} | ${cursoDisplay} | ${anoFormatado}`;
  };

  // Lógica de filtro atualizada para buscar em todo o texto da requisição
  const filteredRequests = requests.filter(req => 
    formatRequestDisplay(req).toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="form-wrapper">
        <h1>{title ? title.split(' ')[0] : ''}<p>{title ? title.split(' ').slice(1).join(' ') : ''}</p></h1>

        <input
          type="search"
          className="search-bar"
          placeholder="Pesquisar por matrícula, nome, curso ou período..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {isLoading ? (
          <p>Carregando requisições...</p>
        ) : error ? (
          <p className="error-message">{error}</p>
        ) : (
          <div className="requests-list">
            {filteredRequests.length > 0 ? (
              filteredRequests.map(req => (
                <Link to={`/admin/requisicao/${req.id}`} key={req.id} className="request-item">
                  {formatRequestDisplay(req)}
                </Link>
              ))
            ) : (
              <p className="no-requests-message">Nenhuma requisição encontrada.</p>
            )}
          </div>
        )}
      </div>
  );
}

export default RequestListPage;