import { Master } from "src/master/entity/master.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("status")
export class Status {

    @PrimaryGeneratedColumn({
        name: "id_status"
    })
    idStatus: number

    @Column({
        name: "status_name"
    })
    statusName: string

    @OneToMany(() => Master, master => master.status)
    master: Master[]

}
