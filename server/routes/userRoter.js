import Router from 'express';
import UserController from '../controllers/userController.js';

import { check } from 'express-validator';
import checkToken from '../middleware/userMiddleware.js'

const userRouter = new Router();

userRouter.post('/registration', [
    check('email', 'Email cannot be empty').notEmpty(),
    check('password', 'min length 8').isLength({min:8})
], UserController.registrationUser);

userRouter.post('/login', UserController.loginUser);
userRouter.get('/activate/:link', UserController.activate);

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getUser);
userRouter.put('/user/add', checkToken, UserController.updateUser);
userRouter.put('/user/remove', checkToken, UserController.removeCities);
userRouter.delete('/user', checkToken, UserController.deleteUser);



export default userRouter;
