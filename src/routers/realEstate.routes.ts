import { Router } from 'express'
import { createRealEstateController, listAllRealEstateController } from '../controllers/realEstate.controllers'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import ensureTokenIsValid from '../middleware/ensureTokenIsValid.middleware'
import verifyAddressExists from '../middleware/varifyIfAddressExists.middleware'
import { verifyIfIsAdmin } from '../middleware/verifyIfIsAdmin.middleware'
import { CompleteRealEstateSchema } from '../schema/realEstate.schema'

const realEstateRoutes:Router = Router()

realEstateRoutes.post('',ensureTokenIsValid,verifyIfIsAdmin,ensureDataIsValid(CompleteRealEstateSchema),verifyAddressExists,createRealEstateController)
realEstateRoutes.get('',listAllRealEstateController)
export default realEstateRoutes