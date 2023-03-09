import { z } from 'zod'
import { createAddressesSchema,AddressesSchema } from './addresses.schema'
import {CategoriesSchema } from './categories.schema'

const RealEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().optional().default(false),
    value: z.number().or(z.string()),
    size: z.number().int().gte(1,{
        message: 'Number must be greater than 0',
    }),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
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

const ReturnCompleteRealEstateSchema = z.object({
    id: z.number(),
    sold: z.boolean().optional().default(false),
    value: z.number().or(z.string()),
    size: z.number().int().gte(1,{
        message: 'Number must be greater than 0',
    }),
    createdAt: z.date().or(z.string()),
    updatedAt: z.date().or(z.string()),
    category: CategoriesSchema,
    address: AddressesSchema
    
})

const RealEstateWithAddress = RealEstateSchema.extend({
    address: AddressesSchema

}).array()

export {
    RealEstateSchema,
    CreateRealEstateSchema,
    CompleteRealEstateSchema,
    ReturnCompleteRealEstateSchema,
    RealEstateWithAddress
}