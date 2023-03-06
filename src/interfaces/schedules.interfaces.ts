import { ScheduleCreateSchema,ScheduleSchema } from '../schema/schudulesUsersProperties.schema'
import { z } from 'zod'

type IscheduleReturn = z.infer<typeof ScheduleSchema>
type IscheduleCreate = z.infer<typeof ScheduleCreateSchema>

export {
    IscheduleReturn,
    IscheduleCreate
}