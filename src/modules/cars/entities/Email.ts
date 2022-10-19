import { Column, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'

@Entity({ name: 'email' })
class Email {

    @PrimaryColumn()
    id: string;

    @Column()
    user_id: string;

    @Column()
    email: string;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}
export { Email }