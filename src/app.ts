import express, { Application } from 'express'
import 'express-async-errors'
import { handleErros } from './error'
import categoriesRoutes from './routers/categories.routes'
import loginRoutes from './routers/login.routes'
import realEstateRoutes from './routers/realEstate.routes'
import userRoutes from './routers/users.routes'

const app:Application = express()
app.use(express.json())

app.use('/users',userRoutes)
app.use('/login',loginRoutes)
app.use('/categories',categoriesRoutes)
app.use('/realEstate',realEstateRoutes)

app.use(handleErros)

export default app