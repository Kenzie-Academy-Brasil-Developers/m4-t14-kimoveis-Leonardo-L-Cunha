import { LoginSchema } from '../schema/login.shema'
import { z } from 'zod'

type Ilogin = z.infer<typeof LoginSchema>


export {
    Ilogin
}