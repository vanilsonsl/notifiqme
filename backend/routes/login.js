app.post('/login', async (req, res) => {
    const { email, senha } = req.body;
    try {
      const userRecord = await auth.getUserByEmail(email);
      // Aqui você pode adicionar lógica para verificar a senha (usando Firebase Auth no frontend).
      res.status(200).send({ uid: userRecord.uid });
    } catch (error) {
      res.status(500).send('Erro ao autenticar: ' + error.message);
    }
  });