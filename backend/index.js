const express = require('express');
const cors = require('cors');
const db = require('./firebaseConfig');

const app = express();
app.use(cors());
app.use(express.json());

// Rota para cadastrar cliente
app.post('/cadastrar-cliente', async (req, res) => {
  const { nome, telefone } = req.body;
  try {
    const clienteRef = db.collection('clientes').doc();
    await clienteRef.set({ nome, telefone });
    res.status(200).send('Cliente cadastrado com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao cadastrar cliente: ' + error.message);
  }
});

// Rota para agendar
app.post('/agendar', async (req, res) => {
  const { clienteId, produto, horario } = req.body;
  try {
    const agendamentoRef = db.collection('agendamentos').doc();
    await agendamentoRef.set({ clienteId, produto, horario, status: 'pendente' });
    res.status(200).send('Agendamento realizado com sucesso!');
  } catch (error) {
    res.status(500).send('Erro ao agendar: ' + error.message);
  }
});

// Iniciar servidor
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});