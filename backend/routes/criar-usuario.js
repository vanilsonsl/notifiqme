const { auth, db } = require('./firebaseConfig');

app.post('/criar-usuario', async (req, res) => {
  const { email, senha } = req.body;
  try {
    const userRecord = await auth.createUser({ email, password: senha });
    res.status(200).send({ uid: userRecord.uid });
  } catch (error) {
    res.status(500).send('Erro ao criar usuário: ' + error.message);
  }
});