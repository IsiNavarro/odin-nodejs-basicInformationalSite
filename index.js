const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`);
});
