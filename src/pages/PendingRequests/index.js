import React from 'react';
import RequestListPage from '../RequestListPage';

function PendingRequests() {
  return (
    <RequestListPage 
      title="REQUISIÇÕES PENDENTES"
      status="pendente"
    />
  );
}

export default PendingRequests;