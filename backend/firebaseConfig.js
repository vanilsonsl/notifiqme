const admin = require('firebase-admin');
const serviceAccount = require('./caminho/para/sua-chave-firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://seu-projeto.firebaseio.com'
});

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

const auth = admin.auth();
const db = admin.firestore();

module.exports = { auth, db };