import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { IuserCreate, IuserReturn } from '../../interfaces/users.interfaces'
import { returnUserSchema} from '../../schema/users.schema'

const createUsersServices = async(dataBody:IuserCreate):Promise<IuserReturn> => {

    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const newUser:User = userRepository.create(dataBody)

    await userRepository.save(newUser)

    const user = returnUserSchema.parse(newUser)


    return user
}

export default createUsersServices