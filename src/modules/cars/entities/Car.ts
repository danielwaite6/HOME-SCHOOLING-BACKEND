import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity("cars")
class Car {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.created_at = new Date()
        }
    }
}
export { Car }