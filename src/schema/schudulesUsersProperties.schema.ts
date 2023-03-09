import { z } from 'zod'

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
export {
    ScheduleSchema,
    ScheduleCreateSchema,
    ScheduleSchemaComplete
}