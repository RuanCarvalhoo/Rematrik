import React from 'react';
import RequestListPage from '../RequestListPage';

function AnalysisRequests() {
  return (
    <RequestListPage 
      title="REQUISIÇÕES PARA ANÁLISE"
      status="analise"
    />
  );
}

export default AnalysisRequests;