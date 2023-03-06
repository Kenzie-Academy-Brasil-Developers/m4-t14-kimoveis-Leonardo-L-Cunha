import { z } from 'zod'
import { createAddressesSchema,AddressesSchema } from './addresses.schema'
import { CreateCategoriesSchema } from './categories.schema'

const RealEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().optional().default(false),
    value: z.number().or(z.string()),
    size: z.number().int(),
    createdAt: z.date(),
    updatedAt: z.date(),
})

const CreateRealEstateSchema = RealEstateSchema.omit({
    id: true,
    createdAt: true,
    updatedAt:true
})

const CompleteRealEstateSchema = CreateRealEstateSchema.extend({
    categoryId: z.number(),
    address: createAddressesSchema
})

const ReturnCompleteRealEstateSchema = RealEstateSchema.extend({
    category: CreateCategoriesSchema,
    address: AddressesSchema
})

export {
    RealEstateSchema,
    CreateRealEstateSchema,
    CompleteRealEstateSchema,
    ReturnCompleteRealEstateSchema
}