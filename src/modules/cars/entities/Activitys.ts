import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity({ name: 'activitys' })
class Activitys {

    @PrimaryColumn()
    id: string;

    @Column()
    filho_id: string;

    @Column()
    name: string;

    @Column()
    mae_id: string;

    @Column()
    atividadeEducativa: string;

    @Column()
    observacoes: string;

    @Column()
    dia: string;

    @Column()
    hora: string;

    /*@CreateDateColumn()
    created_at: Date;*/

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            //this.created_at = new Date()
        }
    }
}
export { Activitys }