import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../error'
import { IeditUsers, IuserReturn } from '../../interfaces/users.interfaces'
import { returnUserSchema, UpdateUsersShema } from '../../schema/users.schema'

const updateUsersServices = async(dataBody:IeditUsers, idUser:number):Promise<IuserReturn> => {

    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const findUser = await userRepository.findOne({
        where: {
            id: idUser
        }
    })
    
    const updatedUser = userRepository.create({
        ...findUser,
        ...dataBody
    })

    await userRepository.save(updatedUser)

    const returnUpdate = returnUserSchema.parse(updatedUser)

    return returnUpdate
}

export default updateUsersServices