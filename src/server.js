const express = require('express');

const routes = require('./routes');

const app = express();

const port = 6969;

app.use(express.json());

app.use(routes);

app.listen(port);
console.log(`Running on port ${port}\n`);
