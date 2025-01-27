import React, { useState } from 'react';

const CadastroCliente = ({ setClienteId }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:3001/cadastrar-cliente', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, telefone }),
    });
    const data = await response.json();
    setClienteId(data.id); // Supondo que o Firebase retorne um ID
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="text"
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
};

export default CadastroCliente;