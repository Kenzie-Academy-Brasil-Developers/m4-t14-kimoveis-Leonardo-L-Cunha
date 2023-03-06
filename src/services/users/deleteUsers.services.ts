import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'

const deleteUsersServices = async(idUser:number):Promise<void> => {
    const userRepository:Repository<User> = AppDataSource.getRepository(User)

    const findUser:User | null= await userRepository.findOne({
        where: {
            id: idUser
        }
    })

    await userRepository.softRemove(findUser!)
}

export default deleteUsersServices