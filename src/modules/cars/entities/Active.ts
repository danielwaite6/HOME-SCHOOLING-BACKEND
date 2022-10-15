import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity({ name: 'active' })
class Active {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    originalAppUserId: string;

    /*@CreateDateColumn()
    created_at: Date;*/

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
export { Active }