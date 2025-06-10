
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('NexaFlow Sistema Moveleiro Backend Rodando');
});

app.listen(port, () => {
  console.log(`Backend rodando em http://localhost:${port}`);
});
