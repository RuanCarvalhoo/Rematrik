import React from 'react';
import RequestListPage from '../RequestListPage';

function CompletedRequests() {
  return (
    <RequestListPage 
      title="REQUISIÇÕES CONCLUÍDAS"
      status="concluida"
    />
  );
}

export default CompletedRequests;