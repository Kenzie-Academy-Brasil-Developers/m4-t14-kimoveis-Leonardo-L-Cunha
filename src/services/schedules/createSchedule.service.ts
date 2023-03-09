import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { RealEstate, Schedule, User } from '../../entities'
import { AppError } from '../../error'
import { IscheduleCreate } from '../../interfaces/schedules.interfaces'

const createScheduleService = async(scheduleData:IscheduleCreate, idUser:number):Promise<string> => {
    const userRepository:Repository<User> = AppDataSource.getRepository(User)
    const realEstateRepository:Repository<RealEstate> = AppDataSource.getRepository(RealEstate)
    const scheduleRepository:Repository<Schedule> = AppDataSource.getRepository(Schedule)

    const user:User | null = await userRepository.findOne({
        where:{
            id: idUser
        }
    })

    if(!user){
        throw new AppError('User not found',404)
    }

    const realEstate:RealEstate| null = await realEstateRepository.findOne({
        where: {
            id: scheduleData.realEstateId
        }
    })

    if(!realEstate){
        throw new AppError('RealEstate not found',404)
    }
    
    const dayOfWeek = new Date(scheduleData.date).getDay()
    
    if(dayOfWeek === 5 || dayOfWeek === 6){
        throw new AppError('Invalid date, work days are monday to friday',400)
    } 

    const hour = scheduleData.hour.split(':')

     if(Number(hour[0]+ hour[1]) < 800 || Number(hour[0]+ hour[1]) > 1800){
        throw new AppError('Invalid hour, available times are 8AM to 18PM',400)
    }
    const verifyIfScheduleExist = await scheduleRepository.createQueryBuilder('schedule')
    .where('schedule.realEstateId = :realEstateId',{
        realEstateId: scheduleData.realEstateId
    })
    .andWhere('schedule.date = :date AND schedule.hour = :hour', {
        date: scheduleData.date,
        hour: scheduleData.hour,
    }).getOne()

    console.log(verifyIfScheduleExist)
    if(verifyIfScheduleExist){
        throw new AppError('Schedule to this real estate at this date and time already exists',409)
    } 

    const verifyIfUserScheduleExist = await scheduleRepository.createQueryBuilder('schedule').
    innerJoin('schedule.user', 'user')
    .where('user.id = :userId AND schedule.date = :date AND schedule.hour = :hour', {
        userId: idUser,
        date: scheduleData.date,
        hour: scheduleData.hour,
    })
    .getOne()
    if(verifyIfUserScheduleExist){
        throw new AppError('User schedule to this real estate at this date and time already exists',409)
    } 

    const newSchedule = scheduleRepository.create({
        date: scheduleData.date,
        hour: scheduleData.hour,
        realEstate: realEstate,
        user: user
    })

    await scheduleRepository.save(newSchedule)

    return 'Schedule created'
}

export default createScheduleService