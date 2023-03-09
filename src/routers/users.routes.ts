import { Router } from 'express'
import { createUsersControllers, deleteUsersControllers, listUsersControllers, updateUsersControllers } from '../controllers/users.controllers'
import ensureAtLeastADate from '../middleware/ensureAtLeastADate.middleware'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import ensureTokenIsValid from '../middleware/ensureTokenIsValid.middleware'
import verifyEmailExists from '../middleware/verifyEmailExists.middleware'
import {verifyIfIsAdmin, verifyIsAdminPatchnDelete} from '../middleware/verifyIfIsAdmin.middleware'
import verifyUserExists from '../middleware/verifyUserExists.middleware'
import { CreateUserSchema, UpdateUsersShema } from '../schema/users.schema'

const userRoutes:Router = Router()

userRoutes.post('',ensureDataIsValid(CreateUserSchema),verifyEmailExists,createUsersControllers)
userRoutes.get('',ensureTokenIsValid,verifyIfIsAdmin,listUsersControllers)
userRoutes.patch('/:id',ensureTokenIsValid,verifyUserExists,verifyIsAdminPatchnDelete,ensureDataIsValid(UpdateUsersShema),ensureAtLeastADate,verifyEmailExists,updateUsersControllers)
userRoutes.delete('/:id',ensureTokenIsValid,verifyUserExists,verifyIfIsAdmin,deleteUsersControllers)
export default userRoutes