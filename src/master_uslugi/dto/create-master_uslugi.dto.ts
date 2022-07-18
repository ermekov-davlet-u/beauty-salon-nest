import { Master } from "src/master/entity/master.entity"
import { Uslugi } from "src/uslugi/entity/uslugi.entity"

export class CreateMasterUslugiDto {
    master: Master
    muslugi: Uslugi
    muPrice: number
}
