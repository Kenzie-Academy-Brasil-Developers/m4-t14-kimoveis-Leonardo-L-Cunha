import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { IreturnUsers } from '../../interfaces/users.interfaces'
import { returnAllUserSchema } from '../../schema/users.schema'

const listUsersServices = async():Promise<IreturnUsers> => {

    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const user:Array<User> = await userRepository.find()

    const users = returnAllUserSchema.parse(user)

    

   return users
}

export default listUsersServices