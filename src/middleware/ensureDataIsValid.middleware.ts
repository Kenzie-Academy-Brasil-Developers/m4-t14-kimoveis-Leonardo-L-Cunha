import {Request, Response, NextFunction} from 'express'
import { ZodTypeAny } from 'zod'


const ensureDataIsValid = (schema:ZodTypeAny) => (req:Request, res:Response, next:NextFunction):void => {
    const validated = schema.parse(req.body)

    req.body = validated

    return next()
}

export default ensureDataIsValid
  
