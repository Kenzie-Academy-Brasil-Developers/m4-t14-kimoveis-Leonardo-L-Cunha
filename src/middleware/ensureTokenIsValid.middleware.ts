import { NextFunction,Request, Response } from 'express'
import 'dotenv/config'
import  jwt  from 'jsonwebtoken'
import { AppError } from '../error'

const ensureTokenIsValid = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {
    let token = req.headers.authorization

    if(!token){
        throw new AppError('Missing bearer token', 401)
    }

    token = token.split(' ')[1]

    jwt.verify(token, process.env.SECRET_KEY!, (error, decoded:any) => {
        if(error){
            throw new AppError(error.message, 401)
        }
        
        req.user = {
            id: parseInt(decoded.sub),
            admin: decoded.admin
        }
        return next()
    })
}

export default ensureTokenIsValid