import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm'
import  RealEstate  from './realEstate.entities'
import  Users  from './users.entities'

@Entity('schedules_users_properties')
class Schedule{
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column()
    date: Date

    @Column()
    hour: Date

    @ManyToOne(() => RealEstate)
    realEstate: RealEstate

    @ManyToOne(() => Users)
    user: Users
}

export default Schedule