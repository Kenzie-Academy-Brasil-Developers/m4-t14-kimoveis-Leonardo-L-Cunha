import {Request, Response, NextFunction} from 'express'
import { Repository } from 'typeorm'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../error'


const verifyUserExists = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {

    const id = parseInt(req.params.id)
    
    const UserRepository:Repository<User> = AppDataSource.getRepository(User)

    const findUser = await UserRepository.findOne({
        where: {
            id: id
        }
    })
    
    if(!findUser){
       throw new AppError('User not found',404)
    }

    return next()
}
export default verifyUserExists