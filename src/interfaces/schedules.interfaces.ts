import { ScheduleCreateSchema,ScheduleSchema, ScheduleSchemaComplete } from '../schema/schudulesUsersProperties.schema'
import { z } from 'zod'

type IscheduleReturn = z.infer<typeof ScheduleSchema>
type IscheduleCreate = z.infer<typeof ScheduleCreateSchema>
type IscheduleComplete = z.infer<typeof ScheduleSchemaComplete>

export {
    IscheduleReturn,
    IscheduleCreate,
    IscheduleComplete
}