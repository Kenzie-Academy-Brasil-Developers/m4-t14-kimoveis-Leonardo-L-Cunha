import 'dotenv/config'
import 'reflect-metadata'
import { DataSource, DataSourceOptions } from 'typeorm'
import path from 'path'
import { Address, Category, RealEstate, Schedule, User } from './entities'

const dataSourceConfig= (): DataSourceOptions => {
    const entitiesPath:string = path.join(__dirname, '/entities/**.{js,ts}')
    const migrationPath:string = path.join(__dirname,'/migrations/**.{js,ts}')

    const dbUrl: string | undefined = process.env.DATABASE_URL

    if(!dbUrl){
        throw new Error ('Env var DATABASE_URL does not exists')
    }

    const nodeEnv:string | undefined = process.env.NODE_ENV

    if(nodeEnv === 'test'){
        return{
            type: 'sqlite',
            database: ':memory:',
            synchronize:true,
            entities: [User,Schedule,Address,RealEstate,Category]
        }
    }

    return {
        type: 'postgres',
        url: dbUrl,
        synchronize: false,
        logging: true,
        migrations: [migrationPath],
        entities: [entitiesPath]
    }
}

const AppDataSource = new DataSource(dataSourceConfig())


export {
    AppDataSource
}