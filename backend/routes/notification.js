const twilio = require('twilio');
const client = twilio('SEU_ACCOUNT_SID', 'SEU_AUTH_TOKEN');

app.post('/enviar-notificacao', async (req, res) => {
  const { telefone, mensagem } = req.body;
  try {
    const message = await client.messages.create({
      body: mensagem,
      from: 'whatsapp:+14155238886', // Número do Twilio
      to: `whatsapp:${telefone}`
    });
    res.status(200).send({ sid: message.sid });
  } catch (error) {
    res.status(500).send('Erro ao enviar notificação: ' + error.message);
  }
});