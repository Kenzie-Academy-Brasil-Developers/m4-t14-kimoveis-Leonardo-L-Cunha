import { z } from 'zod'

const CategoriesSchema = z.object({
    id: z.number(),
    name: z.string().max(45)
})

const CreateCategoriesSchema = CategoriesSchema.omit({
    id: true
})

const ReturnAllCategories = CategoriesSchema.array()
export {
    CategoriesSchema,
    CreateCategoriesSchema,
    ReturnAllCategories
}