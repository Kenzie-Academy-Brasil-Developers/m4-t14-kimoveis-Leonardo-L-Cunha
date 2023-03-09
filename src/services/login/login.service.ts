import { compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'
import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { User } from '../../entities'
import { AppError } from '../../error'
import { Ilogin } from '../../interfaces/login.interfaces'
import 'dotenv/config'

const loginServices = async(loginData:Ilogin):Promise<string> => {

    const userRepository:Repository<User> = AppDataSource.getRepository(User)


    const findUser = await userRepository.findOne({
        where: {
            email: loginData.email
        }
    })

    if(!findUser){
        throw new AppError('Invalid credentials',401)
    }

    const passwordValid:boolean = await compare(loginData.password, findUser.password)

    if(!passwordValid){
        throw new AppError('Invalid credentials',401)
    }

    const token:string = sign(
        {
            admin: findUser.admin
        },
        process.env.SECRET_KEY!,
        {
            expiresIn: process.env.EXPIRES_IN,
            subject: findUser.id.toString()
        }
    )

    return token
}

export default loginServices