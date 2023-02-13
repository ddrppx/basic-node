const express = require('express');
const routes = require('./routes');

const app = express();

const port = 6969;

app.use(express.json());

app.use(routes);

// DB
/*
(async () => {
    const database = require('../database/connection');
    const User = require('./models/userModel');

    try {
        const res = await database.sync();
        console.log(res);
    } catch(err){
        console.log(err);
    }
})();
*/

app.listen(port, () => {
    console.log(`Express running on port: ${port}\n   http://localhost:${port}/`);
});
