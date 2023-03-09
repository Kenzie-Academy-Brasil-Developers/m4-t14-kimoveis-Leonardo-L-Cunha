import { Request, Response } from 'express'
import { Ilogin } from '../interfaces/login.interfaces'
import loginServices from '../services/login/login.service'

const loginController = async(req:Request, res:Response): Promise<Response> => {
    const loginData:Ilogin = req.body

    const token = await loginServices(loginData)


    return res.status(200).json({
        token: token
    })
}

export {
    loginController
}