import { 
    Entity, 
    Column,  
    PrimaryGeneratedColumn, 
    CreateDateColumn, 
    UpdateDateColumn, 
    OneToOne, 
    JoinColumn, 
    ManyToOne, 
    OneToMany 
} from 'typeorm'
import  Addresses  from './addresses.entities'
import  Categories  from './categories.entities'
import Schedule from './schedulesUsersProperties.entities'

@Entity('real_estate')
class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id:number

    @Column({type: 'boolean', default: false,  nullable: true})
    sold: boolean

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number | string

    @Column({type: 'integer'})
    size: number

    @CreateDateColumn({type: "date"})
    createdAt: string

    @UpdateDateColumn({type: "date"})
    updatedAt: string

    @OneToOne(()=> Addresses)
    @JoinColumn()
    address: Addresses

    @ManyToOne(() => Categories,categories => categories.realEstate ,{nullable: true})
    category: Categories

    @OneToMany(()=> Schedule, schedule => schedule.realEstate)
    schedules:Schedule[]
}

export default RealEstate