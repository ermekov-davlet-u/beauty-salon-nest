import { Master } from "src/master/entity/master.entity";
import { Order } from "src/order/entity/order.entity";
import { Uslugi } from "src/uslugi/entity/uslugi.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("master_uslugi")
export class MasterUslugi {

    @PrimaryGeneratedColumn({
        name: "id_mu"
    })
    idMU: number

    @ManyToOne(() => Master, master => master.mu)
    master: Master

    @ManyToOne(() => Uslugi, uslugi => uslugi.mu)
    muslugi: Uslugi

    @Column({ 
        name: "mu_price",
        nullable: true,
        type: "int"
    })
    muPrice: number

    @OneToMany(() => Order, order => order.mu)
    order: Order[]

}
