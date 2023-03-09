import { Router } from 'express'
import { createCategoriesController, listCategoriesController, listRealEstatePerCategories } from '../controllers/categories.controllers'
import ensureDataIsValid from '../middleware/ensureDataIsValid.middleware'
import ensureTokenIsValid from '../middleware/ensureTokenIsValid.middleware'
import { verifyIfIsAdmin } from '../middleware/verifyIfIsAdmin.middleware'
import { CreateCategoriesSchema } from '../schema/categories.schema'

const categoriesRoutes:Router = Router()

categoriesRoutes.post('',ensureTokenIsValid,verifyIfIsAdmin,ensureDataIsValid(CreateCategoriesSchema),createCategoriesController)
categoriesRoutes.get('', listCategoriesController)
categoriesRoutes.get('/:id/realEstate',listRealEstatePerCategories)

export default categoriesRoutes