import { CreateUserSchema, returnUserSchema , returnAllUserSchema,UpdateUsersShema} from '../schema/users.schema' 
import { z }  from 'zod'
import { DeepPartial } from 'typeorm'

type IuserReturn = z.infer<typeof returnUserSchema>
type IuserCreate = z.infer<typeof CreateUserSchema>
type IreturnUsers = z.infer<typeof returnAllUserSchema>
type IeditUsers = DeepPartial<typeof UpdateUsersShema>


export {
    IuserReturn,
    IuserCreate,
    IreturnUsers,
    IeditUsers
   
}