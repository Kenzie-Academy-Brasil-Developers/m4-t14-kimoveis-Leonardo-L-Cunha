import { z } from 'zod'
import { AddressesSchema } from './addresses.schema'
import { CategoriesSchema } from './categories.schema'
import { RealEstateSchema } from './realEstate.schema'
import { UserSchema } from './users.schema'

const ScheduleSchema  = z.object({
    id: z.number(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number()
})

const ScheduleCreateSchema = ScheduleSchema.omit({
    id: true
})
const ScheduleSchemaComplete  = ScheduleCreateSchema.extend({
    userId: z.number().int().optional()
})
const ScheduleWithUser = z.object({
    id:z.number(),
    date: z.string(),
    hour: z.string(),
    user : UserSchema
}).array()
const ScheduleRealEstateComplete = RealEstateSchema.extend({
    schedules: ScheduleWithUser,
    category: CategoriesSchema,
    address: AddressesSchema
})
export {
    ScheduleSchema,
    ScheduleCreateSchema,
    ScheduleSchemaComplete,
    ScheduleRealEstateComplete
}