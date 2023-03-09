import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate, Schedule } from '../../entities'
import { AppError } from '../../error'
import { IscheduleRealEstateComplete } from '../../interfaces/schedules.interfaces'


const listScheduleService = async(idData:number):Promise<IscheduleRealEstateComplete>=> {
    
    const realEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    
    const listScheduleRealEstate = await realEstateRepository.createQueryBuilder('realEstate').
    innerJoinAndSelect('realEstate.schedules','schedule').
    innerJoinAndSelect('realEstate.category','category').
    innerJoinAndSelect('realEstate.address','address').
    innerJoinAndSelect('schedule.user','user').
    where('realEstate.id = :idData',{idData : idData})
    .getOne()

    if(!listScheduleRealEstate){
        throw new AppError('RealEstate not found',404)
    }
   

    return listScheduleRealEstate
}
export default listScheduleService