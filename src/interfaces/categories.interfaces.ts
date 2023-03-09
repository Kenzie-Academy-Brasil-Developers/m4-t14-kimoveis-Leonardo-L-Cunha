import { 
    CategoriesSchema, 
    CreateCategoriesSchema, 
    RealEstatePerCategory, 
    ReturnAllCategories
}from '../schema/categories.schema'
import { z } from 'zod'

type IcategoriesReturn = z.infer<typeof CategoriesSchema>
type IcategoriesCreate = z.infer<typeof CreateCategoriesSchema>
type IreturnAllCategories = z.infer<typeof ReturnAllCategories>
type IrealEstatePerCategory = z.infer<typeof RealEstatePerCategory>


export {
    IcategoriesReturn,
    IcategoriesCreate,
    IreturnAllCategories,
    IrealEstatePerCategory
}