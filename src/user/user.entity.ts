import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name : "tbl_number"})
export class User extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    idx: number

    @Column()
    name: string

    @Column()
    number: string

}