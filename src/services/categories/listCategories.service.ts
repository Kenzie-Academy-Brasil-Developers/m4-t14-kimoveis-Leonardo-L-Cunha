import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { IreturnAllCategories } from '../../interfaces/categories.interfaces'
import { ReturnAllCategories } from '../../schema/categories.schema'

const listCategoriesServices = async():Promise<IreturnAllCategories> => {

    const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)

    const listCategory:Array<Category> = await categoryRepository.find()

    const returnCategories = ReturnAllCategories.parse(listCategory)

    return returnCategories
    
}

export default listCategoriesServices