import React, { useState } from 'react';

const Agendamento = ({ clienteId }) => {
  const [produto, setProduto] = useState('');
  const [horario, setHorario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/agendar', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ clienteId, produto, horario }),
    });
    const data = await response.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Produto"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <input
        type="datetime-local"
        value={horario}
        onChange={(e) => setHorario(e.target.value)}
      />
      <button type="submit">Agendar</button>
    </form>
  );
};

export default Agendamento;