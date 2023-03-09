import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { AppError } from '../../error'
import { IcategoriesCreate, IcategoriesReturn } from '../../interfaces/categories.interfaces'
import { CategoriesSchema } from '../../schema/categories.schema'

const createCategoriesServices = async (categorydata:IcategoriesCreate):Promise<IcategoriesReturn> => {

    const { name } = categorydata

    const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)
    
    const findCategory:Array<Category> = await categoryRepository.find()

    const verifyCategory = findCategory.find((category) => {
        return category.name == name
    })

    if(verifyCategory){
        throw new AppError('Category already exists',409)
    }

    const newCategory:Category = categoryRepository.create(categorydata)

    await categoryRepository.save(newCategory)


    const returnCategory = CategoriesSchema.parse(newCategory)

    return returnCategory
}

export default createCategoriesServices