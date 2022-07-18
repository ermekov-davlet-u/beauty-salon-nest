import { Client } from "src/client/entity/client.entity"
import { MasterUslugi } from "src/master_uslugi/entity/master_uslugi.entity"
import { Time } from "src/time/entity/time.entity"

export class CreateOrderDto {

    mu: MasterUslugi
    client: Client
    time: Time
    OrderDate: Date;
    orderDone: Boolean;

}
