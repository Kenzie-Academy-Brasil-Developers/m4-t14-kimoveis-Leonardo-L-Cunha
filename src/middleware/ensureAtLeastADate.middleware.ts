import {Request, Response, NextFunction} from 'express'
import { AppError } from '../error'

const ensureAtLeastADate = (req:Request, res:Response, next:NextFunction):void => {
    const {name , email, password } = req.body

    if(!name && !email && !password ){
        throw new AppError('At least one of these data must be passed :["name","description","duration","price"]',400)
    }

    return next()
}

export default ensureAtLeastADate