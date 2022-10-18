import { Repository } from 'typeorm'
import { dataSource } from "../../../../database";
import { Active } from '../../entities/Active';
import { IActiveRepository } from '../IActiveRepository';
import { ICreateActiveDTO } from '../../dtos/ICreateActiveDTO';


class ActiveRepository implements IActiveRepository {

    private repository: Repository<Active>

    constructor() {
        this.repository = dataSource.getRepository(Active)
    }
    async create({ user_id, originalAppUserId, ativo }: ICreateActiveDTO): Promise<Active> {

        try {

            const actives = this.repository.create({ user_id, originalAppUserId, ativo })
            const active = await this.repository.save(actives)

            return active

        } catch (error) {
            console.log('Error: ', error);
        }


    }

    /*async list(): Promise<Activitys[]> {
        const activity = await this.repository.find()
        return activity
    }*/
    async listWithWhere(user_id: string, _: string): Promise<Active[]> {

        const activity = await this.repository.createQueryBuilder("active")
            .where("active.user_id = :user_id", { user_id })
            .getMany();
        //.where("activitys.dia >= :dataInicial", { dataInicial })
        //.where("activitys.dia <= :dataFinal", { dataFinal })
        //console.log('activity: ', activity);

        return activity
    }




}
export { ActiveRepository }