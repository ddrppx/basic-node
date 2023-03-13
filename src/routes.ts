
import express from 'express';

import userController from './controllers/userController';

const _userController = new userController();
const routes = express.Router();


// C
routes.post("/create", _userController.create);
// R
routes.get('/', _userController.index);
routes.get('/:id', _userController.indexID);
// U 
routes.put('/update/:id', _userController.update);
// D
routes.delete('/delete/:id', _userController.delete)

export default routes;
