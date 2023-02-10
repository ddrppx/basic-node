const express = require('express');

const userController = require('./controllers/userController');
const userC = new userController();

const routes = express.Router();


// C

routes.post("/create", userC.create);

// R
routes.get('/', userC.index);
routes.get('/:id', userC.indexID);

// U 
routes.put('/update/:id', userC.update);

// D
routes.delete('/delete/:id', userC.delete)

module.exports = routes;
