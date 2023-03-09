import {Request, Response, NextFunction} from 'express'
import { AppDataSource } from '../data-source'
import { User } from '../entities'
import { AppError } from '../error'


const verifyEmailExists = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {
    const { email } = req.body
    const userRepository  = AppDataSource.getRepository(User)
    
    if(email){
        const findEmail:User | null = await userRepository.findOne({
            where:{
                email: email
            }
        })
    
        if(findEmail){
            throw new AppError('Email already exists',409)
        }
    }
    
   
    return next()
}

export default verifyEmailExists