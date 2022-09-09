import { Column, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from 'uuid'

@Entity("filhos")
class Filho {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    mae_id: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }

}
export { Filho }