import { MasterUslugi } from "src/master_uslugi/entity/master_uslugi.entity";
import { Status } from "src/status/entity/status.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("master")
export class Master {

    @PrimaryGeneratedColumn({
        name: "id_master"
    })
    idMaster: number

    @Column({
        name: "masterName"
    })
    masterName: string

    @Column({
        name: "master_tel"
    })
    masterTel: string

    @ManyToOne(() => Status, status => status.master)
    status: Status

    @OneToMany(() => MasterUslugi, mu => mu.master)
    mu: MasterUslugi[];

}
