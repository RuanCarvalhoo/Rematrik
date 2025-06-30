import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

function RequestDetailPage() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  // Estados para o modo de edição
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    const fetchRequest = async () => {
      setIsLoading(true);
      setError('');
      const authToken = Cookies.get('adminAuth');
      if (!authToken) {
        navigate('/admin');
        return;
      }

      try {
        const response = await axios.get(`http://localhost:8080/api/admin/requisicao/${requestId}`, {
            headers: { 'Authorization': `Basic ${authToken}` }
        });
        setRequest(response.data);
        // Inicializa os dados de edição com os dados da requisição
        setEditedData(response.data); 
      } catch (err) {
        setError('Falha ao carregar a requisição.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchRequest();
  }, [requestId, navigate]);

  const handleChangeStatus = async (newStatus) => {
    const authToken = Cookies.get('adminAuth');
    try {
      await axios.put(`http://localhost:8080/api/admin/requisicao/${request.id}/status`, 
        { status: newStatus },
        { headers: { 'Authorization': `Basic ${authToken}` } }
      );
      alert(`Status alterado para: ${newStatus}`);
      // Se o status for alterado, volte para o dashboard para ver a requisição na lista correta.
      navigate('/admin/dashboard');
    } catch (err) {
      alert('Erro ao alterar o status.');
      console.error(err);
    }
  };

  // Funções para o modo de edição
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedData(request); // Restaura os dados originais
  };

  const handleSaveEdit = async () => {
    const authToken = Cookies.get('adminAuth');
    try {
        await axios.put(`http://localhost:8080/api/admin/requisicao/${request.id}`, editedData, {
            headers: { 'Authorization': `Basic ${authToken}` }
        });
        alert('Dados atualizados com sucesso!');
        setIsEditing(false);
        setRequest(editedData); // Atualiza a visualização com os novos dados
    } catch (err) {
        alert('Erro ao salvar as alterações.');
        console.error(err);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prev => ({ ...prev, [name]: value }));
  };


  if (isLoading) return <p>Carregando...</p>;
  if (error) return <p className="error-message">{error}</p>;
  if (!request) return <p>Requisição não encontrada.</p>;

  const getTitle = () => {
    switch (request.status) {
      case 'pendente': return { main: 'REQUISIÇÕES', sub: 'PENDENTES' };
      case 'analise': return { main: 'REQUISIÇÕES', sub: 'PARA ANÁLISE' };
      case 'concluida': return { main: 'REQUISIÇÕES', sub: 'CONCLUÍDAS' };
      default: return { main: 'DETALHE', sub: 'DA REQUISIÇÃO' };
    }
  };
  const pageTitle = getTitle();

  return (
    <div className="form-wrapper">
      <h1>{pageTitle.main}<p>{pageTitle.sub}</p></h1>

      <div className="detail-panel">
        <div className="detail-field">
            <label>Nome do estudante</label>
            {isEditing ? (
                <input type="text" name="nome" value={editedData.nome} onChange={handleInputChange} className="edit-input" />
            ) : (
                <div className="value">{request.nome}</div>
            )}
        </div>
        <div className="detail-group">
            <div className="detail-field">
                <label>Matrícula</label>
                {isEditing ? (
                    <input type="text" name="matricula" value={editedData.matricula} onChange={handleInputChange} className="edit-input" />
                ) : (
                    <div className="value">{request.matricula}</div>
                )}
            </div>
            <div className="detail-field">
                <label>Ano/Semestre</label>
                {isEditing ? (
                    <input type="text" name="anoSemestre" value={editedData.anoSemestre} onChange={handleInputChange} className="edit-input" />
                ) : (
                    <div className="value">{request.anoSemestre}</div>
                )}
            </div>
        </div>
        <div className="detail-field">
            <label>E-mail (estudante)</label>
            {isEditing ? (
                <input type="email" name="email" value={editedData.email} onChange={handleInputChange} className="edit-input" />
            ) : (
                <div className="value">{request.email}</div>
            )}
        </div>
        <div className="detail-field">
            <label>Matérias Solicitadas</label>
            <div className="value materias-list">
              {request.disciplinas.map(d => d.nomeComponente).join(', ')}
            </div>
        </div>
        <div className="detail-actions">
            {isEditing ? (
                <>
                    <button className="action-button" onClick={handleSaveEdit}>SALVAR</button>
                    <button className="action-button" onClick={handleCancelEdit}>CANCELAR</button>
                </>
            ) : (
                <>
                    {request.status === 'pendente' && (
                        <>
                            <button className="action-button" onClick={() => handleChangeStatus('analise')}>ANÁLISE</button>
                            <button className="action-button" onClick={() => handleChangeStatus('concluida')}>CONCLUÍDA</button>
                        </>
                    )}
                    {request.status === 'analise' && (
                        <>
                            <button className="action-button" onClick={handleEdit}>EDITAR</button>
                            <button className="action-button" onClick={() => handleChangeStatus('concluida')}>CONCLUÍDA</button>
                        </>
                    )}
                    {request.status === 'concluida' && (
                        <>
                           <button className="action-button" onClick={() => handleChangeStatus('analise')}>REABRIR (ANÁLISE)</button>
                        </>
                    )}
                </>
            )}
        </div>
      </div>
    </div>
  );
}

export default RequestDetailPage;