
import { Order } from 'src/order/entity/order.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';


@Entity("client")
export class Client {

    @PrimaryGeneratedColumn({
        name: "id_client"
    })
    idClient: number

    @Column({
        name: "client_name"
    })
    clientName: string;

    @Column({
        name: "client_tel"
    })
    clientTel: string;

    @OneToMany(() => Order, order => order.client)
    order: Order[]


}
