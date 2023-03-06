import { Request, Response } from 'express'
import { IcompleteRealEstate } from '../interfaces/realEstate.interfaces'
import createRealEstateService from '../services/realEstate/createRealEstate.services'

const createRealEstateController = async(req:Request, res:Response):Promise<Response> => {
    const completeRealEstateData:IcompleteRealEstate = req.body

    const newRealEstate = await createRealEstateService(completeRealEstateData)

    return res.status(201).json(newRealEstate)
}

export {
    createRealEstateController
}