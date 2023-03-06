import { Router } from 'express'
import { createRealEstateController } from '../controllers/realEstate.controllers'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import { CompleteRealEstateSchema } from '../schema/realEstate.schema'

const realEstateRoutes:Router = Router()

realEstateRoutes.post('',ensureDataIsValid(CompleteRealEstateSchema),createRealEstateController)

export default realEstateRoutes