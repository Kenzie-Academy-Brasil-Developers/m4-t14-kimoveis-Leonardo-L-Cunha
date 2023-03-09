import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import  RealEstate  from './realEstate.entities'
import  Users  from './users.entities'

@Entity('schedules_users_properties')
class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({type:'date'})
    date: string

    @Column({type:'time'})
    hour: string

    @ManyToOne(() => RealEstate ,realEstate => realEstate.schedules)
    realEstate: RealEstate

    @ManyToOne(() => Users, users => users.schedule)
    user: Users
}

export default Schedule