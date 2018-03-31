const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hey. It worked.');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}!!`);
});

// run application using docker
// docker run -it --rm 
// -p 9229:9229 -p 3000:3000 -v "$PWD":/app 
// node-udemy nodemon --inspect-brk=0.0.0.0:9229 app.js