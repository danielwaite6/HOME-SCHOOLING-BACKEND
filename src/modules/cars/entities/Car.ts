import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuidV4 } from 'uuid'
import { Category } from './Category';

@Entity({ name: 'cars' })
class Car {

    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    available: boolean;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category

    @Column()
    category_id: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
            this.available = true
            this.created_at = new Date()
        }
    }
}
export { Car }