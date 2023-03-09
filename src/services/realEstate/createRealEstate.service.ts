import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Address, Category, RealEstate } from '../../entities'
import { AppError } from '../../error'
import { IaddressesCreate } from '../../interfaces/addresses.interfaces'
import { IcompleteRealEstate, IreturnCompleteRealEstate } from '../../interfaces/realEstate.interfaces'
import { ReturnCompleteRealEstateSchema } from '../../schema/realEstate.schema'

const createRealEstateService = async(realEstateData:IcompleteRealEstate):Promise<IreturnCompleteRealEstate> => {
  
    const realEstate = {
        sold: realEstateData.sold,
        value: realEstateData.value,
        size: realEstateData.size
    }

    const category = realEstateData.categoryId

    let address:IaddressesCreate = {
        street: realEstateData.address.street,
        zipCode: realEstateData.address.zipCode,
        city: realEstateData.address.city,
        state: realEstateData.address.state
    }
    
    if(realEstateData.address.number){
        address = {
            number: realEstateData.address.number,
            street: realEstateData.address.street,
            zipCode: realEstateData.address.zipCode,
            city: realEstateData.address.city,
            state: realEstateData.address.state
        }
    }
   

    const categoryRepository:Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory:Category | null = await categoryRepository.findOne({
        where: {
            id : category
        }
    })

    if(!findCategory){
        throw new AppError('Category Not found', 404)
    }

    const addressRepository:Repository<Address> = AppDataSource.getRepository(Address)

    const newAddres:Address = addressRepository.create(address) 

    await addressRepository.save(newAddres)

    const realEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const newRealEstate:RealEstate = realEstateRepository.create({
        ...realEstate,
        address: newAddres,
        category:findCategory
    })
    
    await realEstateRepository.save(newRealEstate)

    const completeRealEstate = {
        ...newRealEstate,
        category : {
            id: findCategory.id,
            name: findCategory.name
        },
        address: newAddres

    }
    
    const returnCompleteRealEstate = ReturnCompleteRealEstateSchema.parse(completeRealEstate) 

    
    return returnCompleteRealEstate

}

export default createRealEstateService