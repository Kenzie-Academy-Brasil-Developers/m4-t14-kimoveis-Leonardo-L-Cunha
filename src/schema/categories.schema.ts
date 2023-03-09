import { z } from 'zod'
import { RealEstateSchema } from './realEstate.schema'

const CategoriesSchema = z.object({
    id: z.number(),
    name: z.string().max(45)
})

const CreateCategoriesSchema = CategoriesSchema.omit({
    id: true
})

const RealEstatePerCategory = CategoriesSchema.extend({
    realEstate: RealEstateSchema.array()
})

const ReturnAllCategories = CategoriesSchema.array()
export {
    CategoriesSchema,
    CreateCategoriesSchema,
    ReturnAllCategories,
    RealEstatePerCategory
}