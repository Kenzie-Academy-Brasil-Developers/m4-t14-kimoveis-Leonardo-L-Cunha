import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate } from '../../entities'
import { IrealEstateWithAddress } from '../../interfaces/realEstate.interfaces'
import { RealEstateWithAddress } from '../../schema/realEstate.schema'

const listAllRealEstateService = async():Promise<IrealEstateWithAddress> => {
    const RealEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)

    const listAllRealEstate:Array<RealEstate> = await RealEstateRepository.find({
        relations: {
            address: true
        }
    })

    const listRealEstate = RealEstateWithAddress.parse(listAllRealEstate)
    
    return listRealEstate
}

export default listAllRealEstateService