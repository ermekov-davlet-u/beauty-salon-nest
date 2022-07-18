import { Connection } from "typeorm";
import { Salon } from "./entity/salon.entity";



export const salonProvider = [
    // {
    //     provide: "SALON_REPOSITORY",
    //     useFactory: (connection: Connection) => connection.getRepository(Salon),
    //     inject: ["DATABASE_CONNECTION"],
    // },
];