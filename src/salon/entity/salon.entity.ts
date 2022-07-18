import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("salon")
export class Salon {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: "salon_name",
        type: "varchar",
        length: 80
    })
    salonName: string;

    @Column({
        name: "salon_address",
        length: 100
    })
    salonAddress: string;

    @Column({
        name: "salon_tel",
        length: 24
    })
    salonTel: string

}
