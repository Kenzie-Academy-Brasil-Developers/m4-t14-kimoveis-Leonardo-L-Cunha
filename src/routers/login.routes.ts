import { Router } from 'express'
import { loginController } from '../controllers/login.controllers'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import { LoginSchema } from '../schema/login.shema'

const loginRoutes:Router = Router()

loginRoutes.post('',ensureDataIsValid(LoginSchema),loginController)

export default loginRoutes