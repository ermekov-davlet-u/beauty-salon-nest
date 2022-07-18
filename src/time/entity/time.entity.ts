import { Order } from "src/order/entity/order.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("time")
export class Time {

    @PrimaryGeneratedColumn({
        name: 'id_time'
    })
    idTime: number

    @Column({
        name: "time_name"
    })
    timeName: string

    @ManyToOne(() => Order, order => order.time)
    order: Order[]

}
