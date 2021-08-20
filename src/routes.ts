import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticationUserController  } from './controllers/AuthenticationUserController'

const router = Router();

const createUserController = new CreateUserController()

const createTagController = new CreateTagController()
const authenticationUserController = new AuthenticationUserController()

router.post("/users", ensureAdmin ,createUserController.handle)
router.post("/tags", createTagController.handle)
router.post("/login", authenticationUserController.handle)

export { router }