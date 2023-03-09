import { Router } from 'express'
import { createScheduleController, listScheduleController } from '../controllers/schedules.controllers'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import ensureTokenIsValid from '../middleware/ensureTokenIsValid.middleware'
import { verifyIfIsAdmin } from '../middleware/verifyIfIsAdmin.middleware'
import { ScheduleCreateSchema } from '../schema/schudulesUsersProperties.schema'

const schedulesRoutes:Router = Router()

schedulesRoutes.post('',ensureTokenIsValid,ensureDataIsValid(ScheduleCreateSchema),createScheduleController)
schedulesRoutes.get('/realEstate/:id',ensureTokenIsValid,verifyIfIsAdmin,listScheduleController)
export default schedulesRoutes