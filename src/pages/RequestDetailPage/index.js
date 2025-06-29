import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout'; // A importação ainda é necessária aqui

const allRequests = [
    { id: 1, matricula: 'EWB30190', nome: 'JOSÉ NUNES', curso: 'INFORMATICA', ano: '1 ANO', status: 'pendente', materias: ['CÁLCULO I', 'LÓGICA DE PROGRAMAÇÃO'] },
    { id: 2, matricula: 'EWB30100', nome: 'MARIA JOSE', curso: 'INFORMATICA', ano: '2 ANO', status: 'pendente', materias: ['ESTRUTURA DE DADOS'] },
    { id: 3, matricula: 'EWB30060', nome: 'RUAN CARVALHO', curso: 'INFORMATICA', ano: '3 ANO', status: 'analise', materias: ['COMPILADORES'] },
    { id: 4, matricula: 'APB10190', nome: 'ANA SILVA', curso: 'AGROPECUÁRIA', ano: '1 ANO', status: 'concluida', materias: ['BIOLOGIA I', 'QUÍMICA ORGÂNICA'] },
    { id: 5, matricula: 'APB20390', nome: 'PEDRO SOUZA', curso: 'AGROPECUÁRIA', ano: '2 ANO', status: 'concluida', materias: ['ZOOTECNIA'] },
    { id: 6, matricula: 'EWB30191', nome: 'JOSIANE LIMA', curso: 'INFORMATICA', ano: '1 ANO', status: 'pendente', materias: ['INGLÊS III'] },
];

function RequestDetailPage() {
  const { requestId } = useParams();
  const navigate = useNavigate();
  
  const [request, setRequest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editableData, setEditableData] = useState({});

  useEffect(() => {
    setTimeout(() => {
      const foundRequest = allRequests.find(r => r.id === parseInt(requestId));
      setRequest(foundRequest);
      if (foundRequest) {
        setEditableData(foundRequest);
      }
      setIsLoading(false);
    }, 500);
  }, [requestId]);

  const handleChangeStatus = (newStatus) => {
    alert(`Status da requisição ${request.id} alterado para: ${newStatus}`);
    navigate('/admin/dashboard');
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => {
    setRequest(editableData);
    setIsEditing(false);
    alert('Alterações salvas com sucesso (simulação)!');
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableData(prevData => ({ ...prevData, [name]: value }));
  };
  
  // --- LÓGICA DE RENDERIZAÇÃO CORRIGIDA ---

  // 1. O componente `ProtectedRoute` já está envolvendo tudo em um `Layout`.
  //    Portanto, aqui retornamos apenas o conteúdo.
  if (isLoading) {
    return <p>Carregando...</p>; // REMOVIDO O <Layout> DAQUI
  }

  // 2. O mesmo vale para a mensagem de "não encontrado".
  if (!request) {
    return <p>Requisição não encontrada.</p>; // REMOVIDO O <Layout> DAQUI
  }

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
    // O retorno principal já não tinha o Layout, o que estava correto.
    <div className="form-wrapper">
      <h1>{pageTitle.main}<p>{pageTitle.sub}</p></h1>

      <div className="detail-panel">
        {isEditing ? (
          // --- MODO DE EDIÇÃO ---
          <>
            <div className="detail-field">
                <label>Nome do estudante</label>
                <input type="text" name="nome" value={editableData.nome} onChange={handleInputChange} className="edit-input" />
              </div>
              <div className="detail-group">
                <div className="detail-field">
                  <label>Matrícula</label>
                  <input type="text" name="matricula" value={editableData.matricula} onChange={handleInputChange} className="edit-input" />
                </div>
                <div className="detail-field">
                  <label>Ano</label>
                  <input type="text" name="ano" value={editableData.ano} onChange={handleInputChange} className="edit-input" />
                </div>
              </div>
              <div className="detail-field">
                <label>Matérias (separadas por vírgula)</label>
                <textarea 
                  name="materias" 
                  value={Array.isArray(editableData.materias) ? editableData.materias.join(', ') : ''} 
                  onChange={(e) => handleInputChange({target: {name: 'materias', value: e.target.value.split(',').map(m => m.trim())}})} 
                  className="edit-textarea"
                ></textarea>
              </div>
              <div className="detail-actions">
                <button className="action-button" onClick={handleSave}>SALVAR</button>
              </div>
          </>
        ) : (
          // --- MODO DE VISUALIZAÇÃO ---
          <>
            <div className="detail-field">
                <label>Nome do estudante</label>
                <div className="value">{request.nome}</div>
              </div>
              <div className="detail-group">
                <div className="detail-field"><label>Matrícula</label><div className="value">{request.matricula}</div></div>
                <div className="detail-field"><label>Ano</label><div className="value">{request.ano}</div></div>
              </div>
              <div className="detail-field"><label>E-mail (estudante)</label><div className="value">{`${request.nome.split(' ')[0].toLowerCase()}${request.matricula.slice(-4)}@discente.ifpe.edu.br`}</div></div>
              <div className="detail-field"><label>Matérias</label><div className="value materias-list">{request.materias.join(', ')}</div></div>
              <div className="detail-actions">
                {request.status === 'pendente' && (
                  <><button className="action-button" onClick={() => handleChangeStatus('analise')}>ANÁLISE</button><button className="action-button" onClick={() => handleChangeStatus('concluida')}>CONCLUÍDA</button></>
                )}
                {request.status === 'analise' && (
                  <><button className="action-button" onClick={handleEdit}>EDITAR</button><button className="action-button" onClick={() => handleChangeStatus('concluida')}>CONCLUÍDA</button></>
                )}
                {request.status === 'concluida' && (
                  <><button className="action-button" onClick={handleEdit}>EDITAR</button><button className="action-button" onClick={() => handleChangeStatus('analise')}>ANÁLISE</button></>
                )}
              </div>
          </>
        )}
      </div>
    </div>
  );
}

export default RequestDetailPage;