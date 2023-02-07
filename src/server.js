const express = require('express');

const app = express();

const port = 6969;

app.use(express.json());

app.get('/', (req, res) => {

    return res.json({
        message: "Hello World"
    });
});

app.listen(port);
console.log(`Running on port ${port}\n`);
