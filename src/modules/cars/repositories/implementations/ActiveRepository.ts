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
    async create({ user_id, originalAppUserId }: ICreateActiveDTO): Promise<Active> {

        try {

            const activityes = this.repository.create({ user_id, originalAppUserId })
            const activitye = await this.repository.save(activityes)

            return activitye

        } catch (error) {
            console.log('Error: ', error);
        }


    }

    /*async list(): Promise<Activitys[]> {
        const activity = await this.repository.find()
        return activity
    }*/
    async listWithWhere(mae_id: string, filho_id: string): Promise<Active[]> {



        const activity = await this.repository.createQueryBuilder("activitys")
            .where("activitys.mae_id = :mae_id", { mae_id })
            .where("activitys.filho_id = :filho_id", { filho_id })

            //.where("activitys.dia >= :dataInicial", { dataInicial })
            //.where("activitys.dia <= :dataFinal", { dataFinal })


            .getMany();
        console.log('activity: ', activity);

        //       dataInicial   dataFinal

        return activity
    }




}
export { ActiveRepository }