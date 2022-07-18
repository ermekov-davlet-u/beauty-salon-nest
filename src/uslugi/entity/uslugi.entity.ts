import { Category } from "src/category/entity/category.entity";
import { MasterUslugi } from "src/master_uslugi/entity/master_uslugi.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("uslugi")
export class Uslugi {

    @PrimaryGeneratedColumn({
        name: "id_uslugi"
    })
    idUslugi: number;

    @Column({
        name: "uslugi_name"
    })
    uslugiName: string;

    @ManyToOne(() => Category, category => category.uslugi)
    category: Category

    @OneToMany(() => MasterUslugi, mu => mu.muslugi)
    mu: MasterUslugi[]

}
