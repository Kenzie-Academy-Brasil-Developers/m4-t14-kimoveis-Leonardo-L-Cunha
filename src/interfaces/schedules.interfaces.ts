import {
    ScheduleCreateSchema,
    ScheduleSchema, 
    ScheduleSchemaComplete, 
    ScheduleRealEstateComplete 
} from '../schema/schudulesUsersProperties.schema'
import { z } from 'zod'

type IscheduleReturn = z.infer<typeof ScheduleSchema>
type IscheduleCreate = z.infer<typeof ScheduleCreateSchema>
type IscheduleComplete = z.infer<typeof ScheduleSchemaComplete>
type IscheduleRealEstateComplete = z.infer<typeof ScheduleRealEstateComplete>

export {
    IscheduleReturn,
    IscheduleCreate,
    IscheduleComplete,
    IscheduleRealEstateComplete
}