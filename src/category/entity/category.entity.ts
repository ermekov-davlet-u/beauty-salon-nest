import { Uslugi } from "src/uslugi/entity/uslugi.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity("category")
export class Category {

    @PrimaryGeneratedColumn({
        name: "id_category"
    })
    idCategory: number;

    @Column({
        name: "category_name"
    })
    categoryName: string

    @OneToMany(() => Uslugi, uslugi => uslugi.category)
    uslugi: Uslugi[]

}
