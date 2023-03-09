import { Request, Response } from 'express'
import { IscheduleCreate } from '../interfaces/schedules.interfaces'
import createScheduleService from '../services/schedules/createSchedule.service'
import listScheduleService from '../services/schedules/listSchedule.service'

const createScheduleController = async(req:Request, res:Response):Promise<Response> =>{
    const scheduleData:IscheduleCreate = req.body
    const idUser:number = req.user.id

    const newSchedule = await createScheduleService(scheduleData,idUser)
    
    return res.status(201).json({
        message: newSchedule
    })
}

const listScheduleController = async(req:Request, res:Response):Promise<Response> =>{
    const idRealEstate = parseInt(req.params.id)

    const listSchedule = await listScheduleService(idRealEstate)
    return res.json(listSchedule)
}

export {
    createScheduleController,
    listScheduleController
}