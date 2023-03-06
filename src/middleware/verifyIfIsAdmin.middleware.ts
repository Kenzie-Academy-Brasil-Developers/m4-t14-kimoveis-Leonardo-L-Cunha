import { Request, Response, NextFunction } from 'express'
import { AppError } from '../error'

const verifyIfIsAdmin = async(req:Request, res:Response , next:NextFunction):Promise<Response | void> => {
    const { admin }  = req.user

    if(!admin){
        throw new AppError('Insufficient permission',403)
    }

    return next()
}
const verifyIsAdminPatchnDelete = (req:Request, res:Response, next: NextFunction):void=> {
    const {id , admin} = req.user

    if(parseInt(req.params.id ) != id && admin == false){
        throw new AppError('Insufficient permission',403)
    }
    
    return next()
}
export {
    verifyIfIsAdmin,
    verifyIsAdminPatchnDelete
}