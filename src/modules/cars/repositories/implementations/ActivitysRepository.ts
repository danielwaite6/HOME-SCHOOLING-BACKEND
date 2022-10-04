import { Repository } from 'typeorm'
import { dataSource } from "../../../../database";
import { Activitys } from '../../entities/Activitys';
import { IActivitysRepository } from '../IActivitysRepository';
import { ICreateActivityDTO } from '../../dtos/ICreateActivityDTO';


class ActivitysRepository implements IActivitysRepository {

    private repository: Repository<Activitys>

    constructor() {
        this.repository = dataSource.getRepository(Activitys)
    }
    async create({ atividadeEducativa, dia, filho_id, hora, mae_id, name, observacoes }: ICreateActivityDTO): Promise<Activitys> {

        try {

            const activitys = this.repository.create({ atividadeEducativa, dia, filho_id, hora, mae_id, name, observacoes })
            const activity = await this.repository.save(activitys)

            return activity

        } catch (error) {
            console.log('Error: ', error);
        }


        //console.log(filho_id, name, mae_id, atividadeEducativa, observacoes, dia, hora);
    }
    //create(data: ICreateActivityDTO): Promise<Activitys>
    /*async create({ atividadeEducativa, dia, filho_id, hora, mae_id, name, observacoes }: ICreateActivityDTO): Promise<Activitys> {
        const filho = this.repository.create({ mae_id, name })
        await this.repository.save(filho)
    }*/


    /*async findByName(name: string): Promise<Filho> {
        const filho = await this.repository.findOneBy({ name })
        return filho
    }

    async list(): Promise<Filho[]> {
        const filhos = await this.repository.find()
        return filhos
    }

    async delete(id: string): Promise<void> {
        const filho = await this.repository.delete(id)
    }

    async update(id: string): Promise<void> {
        //const filho = await this.repository.update()
    }*/

}
export { ActivitysRepository }