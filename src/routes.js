const express = require('express');

const userController = require('./controllers/userController');
const userC = new userController();

const routes = express.Router();


// R
routes.get('/', userC.index);

// C
routes.get('/create', (req, res) => {
    return res.json(
        { message: "Create" }
    );

});

routes.put("/create", (req, res) => {
    const { name } = req.body;

    return res.json(
        { message: "Success" }
    );
});

routes.get('/update/:id', (req, res) => {
    return res.json( 
        { message: "Update" }
    );
})

routes.put('/update/:id', (req,res) => {
    return res.json(
        { message: "Success" }
    )
})

routes.delete('/delete/:id', (req, res) => {
    return res.json(
        { message: "Success" }
    )
})

module.exports = routes;
