import { Request, Response, NextFunction } from 'express'
import { Repository } from 'typeorm'

import { AppDataSource } from '../data-source'
import { Address } from '../entities'
import { AppError } from '../error'
import { IcompleteRealEstate } from '../interfaces/realEstate.interfaces'

const verifyAddressExists = async (req:Request, res:Response, next:NextFunction):Promise<Response | void> => {
    const addressBody:IcompleteRealEstate = req.body
    const addressRepository:Repository<Address> = AppDataSource.getRepository(Address)

    if(addressBody.address.number){
        const findAddress:Address | null = await addressRepository.findOneBy({
            number: addressBody.address.number
        } )

        if(findAddress){
            throw new AppError('Address already exists', 409)
        }

        return next()
    }
    
    return next()
}

export default verifyAddressExists