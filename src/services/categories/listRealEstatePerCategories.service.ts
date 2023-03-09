import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import {  Category } from '../../entities'
import { AppError } from '../../error'
import { IrealEstatePerCategory } from '../../interfaces/categories.interfaces'
import { RealEstatePerCategory } from '../../schema/categories.schema'

const listRealEstatePerCategoriesService = async(idData:number):Promise<IrealEstatePerCategory> => {
    const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory = await categoryRepository.findOne({
        where: {
            id: idData
        },
        relations: {
            realEstate: true
        }
    })
    
    if(!findCategory){
        throw new AppError('Category not found', 404)
    }

    const listRealEstatePerCategory = RealEstatePerCategory.parse(findCategory)

    return listRealEstatePerCategory
}
export default listRealEstatePerCategoriesService