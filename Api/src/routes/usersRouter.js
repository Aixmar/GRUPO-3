const { Router } = require('express');
const usersRouter = Router();
const { getAllUsersHandler, postUserHandler, userByIdHandler } = require('../handlers/usersHandlers');

usersRouter.get('/', getAllUsersHandler);
usersRouter.get('/:id', userByIdHandler);
usersRouter.post('/', postUserHandler);



module.exports = usersRouter;