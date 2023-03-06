import { z} from 'zod'

const AddressesSchema = z.object({
    id: z.number(),
    street: z.string().max(45),
    zipCode: z.string().max(8),
    number: z.string().max(6),
    city: z.string().max(20),
    state: z.string().min(2).max(2)
})

const createAddressesSchema = AddressesSchema.omit({
    id: true
})

export {
    AddressesSchema,
    createAddressesSchema
}