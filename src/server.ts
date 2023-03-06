import app from './app'
import { AppDataSource } from './data-source'
import 'dotenv/config'

AppDataSource.initialize().then(()=> {
    console.log('Database connected!')
    const port = process.env.PORT || 3000
    app.listen(port,()=> {
        console.log('Server is running!')
    })
}).catch(err => {
    console.log(err)
})