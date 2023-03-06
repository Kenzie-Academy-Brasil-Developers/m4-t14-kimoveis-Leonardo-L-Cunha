import { Entity, Column ,  PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm'
import  Addresses  from './addresses.entities'
import  Categories  from './categories.entities'

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
    addresses: Addresses

    @ManyToOne(() => Categories)
    category: Categories
}

export default RealEstate