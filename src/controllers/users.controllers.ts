import { Request, Response } from 'express'
import { IeditUsers, IuserCreate, IuserReturn } from '../interfaces/users.interfaces'
import createUsersServices from '../services/users/createUsers.services'
import deleteUsersServices from '../services/users/deleteUsers.services'
import listUsersServices from '../services/users/listUsers.services'
import updateUsersServices from '../services/users/updateUsers.services'

const createUsersControllers = async(req:Request,  res:Response):Promise<Response> => {
    const dataBody:IuserCreate = req.body

    const newUser = await createUsersServices(dataBody)
    
    return res.status(201).json(newUser)
}

const listUsersControllers = async(req: Request, res:Response):Promise<Response> => {

    const users = await listUsersServices()

    return res.json(users)
}

const updateUsersControllers = async(req: Request, res:Response):Promise<Response> => {

    const id :number = parseInt(req.params.id)
    const dataBody:IeditUsers = req.body

    const updateUser = await updateUsersServices(dataBody,id)

    return res.status(200).json(updateUser)
}

const deleteUsersControllers = async(req:Request, res:Response):Promise<Response> => {
    const idData:number = parseInt(req.params.id)

    await deleteUsersServices(idData)

    return res.status(204).send()
}
export {
    createUsersControllers,
    listUsersControllers,
    updateUsersControllers,
    deleteUsersControllers
}