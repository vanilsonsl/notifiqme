import React, { useState } from 'react';
import CadastroCliente from './components/CadastroCliente';
import Agendamento from './components/Agendamento';
import './App.css';

function App() {
  const [clienteId, setClienteId] = useState(null);
  const [user, setUser] = useState(null);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  
  return (
    <div className="App">
      <h1>Sistema de Agendamento</h1>
      {!clienteId ? (
        <CadastroCliente setClienteId={setClienteId} />
      ) : (
        <Agendamento clienteId={clienteId} />
      )}
    </div>
  );
}

export default App;