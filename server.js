const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Nodes App! s dhanush hai how are');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});