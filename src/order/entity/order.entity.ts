import { Client } from "src/client/entity/client.entity";
import { MasterUslugi } from "src/master_uslugi/entity/master_uslugi.entity";
import { Time } from "src/time/entity/time.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity("order")
export class Order {

    @PrimaryGeneratedColumn({
        name: "id_order"
    })
    idOrder: number

    @ManyToOne(() => MasterUslugi, mu => mu.order)
    mu: MasterUslugi

    @ManyToOne(() => Client, client => client.order)
    client: Client

    @ManyToOne(() => Time, time => time.order)
    time: Time

    @Column({ type: 'date', nullable: true })
    OrderDate: Date;

    @Column({
        default: false,
        nullable: true
    })
    orderDone: Boolean;



}
