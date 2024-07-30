const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
  // TODO: Send the ""Hello, world!"" response
  return res.send('Hello, world!');
});

app.listen(port, () => {
  // TODO: Log a message to the console when the server starts listening on the port
  console.log(`server is reunning at http://localhost:${port}`);
});

// DO NOT EDIT BELOW THIS LINE

module.exports = { server }
