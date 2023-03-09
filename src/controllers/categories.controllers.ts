import { Request, Response } from 'express'
import { IcategoriesCreate } from '../interfaces/categories.interfaces'
import createCategoriesServices from '../services/categories/createCategories.service'
import listCategoriesServices from '../services/categories/listCategories.service'
import listRealEstatePerCategoriesService from '../services/categories/listRealEstatePerCategories.service'

const createCategoriesController = async(req:Request, res:Response):Promise<Response> => {
    const categoryDate:IcategoriesCreate = req.body

    const newCategory = await createCategoriesServices(categoryDate)
    
    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req:Request, res:Response):Promise<Response> => {

    const listCategories = await listCategoriesServices()

    return res.json(listCategories)
}
const listRealEstatePerCategories = async (req:Request, res:Response):Promise<Response> => {
    
    const listRealEstatePerCategories = await listRealEstatePerCategoriesService(parseInt(req.params.id))
    
    return res.json(listRealEstatePerCategories)
}
export {
    createCategoriesController,
    listCategoriesController,
    listRealEstatePerCategories
}