import { Request, Response } from 'express'
import { IcompleteRealEstate } from '../interfaces/realEstate.interfaces'
import createRealEstateService from '../services/realEstate/createRealEstate.service'
import listAllRealEstateService from '../services/realEstate/listAllRealEstate.service'

const createRealEstateController = async(req:Request, res:Response):Promise<Response> => {
    const completeRealEstateData:IcompleteRealEstate = req.body

    const newRealEstate = await createRealEstateService(completeRealEstateData)

    return res.status(201).json(newRealEstate)
}
const listAllRealEstateController = async(req:Request, res:Response):Promise<Response> => {
    
    const listAllRealEstate = await listAllRealEstateService()

    return res.json(listAllRealEstate)
}
export {
    createRealEstateController,
    listAllRealEstateController
}