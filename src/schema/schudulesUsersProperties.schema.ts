import { z } from 'zod'

const ScheduleSchema  = z.object({
    id: z.number(),
    date: z.date(),
    hour: z.date()

})

const ScheduleCreateSchema = ScheduleSchema.omit({
    id: true
})

export {
    ScheduleSchema,
    ScheduleCreateSchema
}