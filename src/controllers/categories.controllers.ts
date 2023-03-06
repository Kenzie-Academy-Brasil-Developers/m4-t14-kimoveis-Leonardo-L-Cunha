import { Request, Response } from 'express'
import { IcategoriesCreate } from '../interfaces/categories.interfaces'
import createCategoriesServices from '../services/categories/createCategories.services'
import listCategoriesServices from '../services/categories/listCategories.services'

const createCategoriesController = async(req:Request, res:Response):Promise<Response> => {
    const categoryDate:IcategoriesCreate = req.body

    const newCategory = await createCategoriesServices(categoryDate)
    
    return res.status(201).json(newCategory)
}

const listCategoriesController = async (req:Request, res:Response):Promise<Response> => {

    const listCategories = await listCategoriesServices()

    return res.json(listCategories)
}

export {
    createCategoriesController,
    listCategoriesController
}