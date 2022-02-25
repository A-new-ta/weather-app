import Router from 'express';
import UserController from '../controllers/UserController.js';
import { check } from 'express-validator';
import checkToken from '../middleware/UserMiddleware.js'

const userRouter = new Router();

userRouter.post('/registration', [
    check('email', 'Email cannot be empty').notEmpty(),
    check('password', 'min length 6').isLength({min:6})
], UserController.registrationUser);

userRouter.post('/login', UserController.loginUser);

userRouter.get('/', UserController.getAll);
userRouter.get('/:id', UserController.getUser);
userRouter.put('/', checkToken, UserController.updateUser);
userRouter.delete('/', checkToken, UserController.deleteUser);



export default userRouter;
