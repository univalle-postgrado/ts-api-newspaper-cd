import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from "typeorm"

@Entity()
export class Category {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: "varchar", length: 180, unique: true })
    title: string

    @Column({ type: "varchar", length: 180, unique: true })
    alias: string
    
    @Column({ unsigned: true })
    position: number

    @Column()
    published: boolean
    
    @CreateDateColumn({ name: "createdAt" })
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

    @Column({ type: "varchar", length: 60 })
    createdBy: string

    @Column({ type: "varchar", length: 60, nullable : true})
    updatedBy: string

}
