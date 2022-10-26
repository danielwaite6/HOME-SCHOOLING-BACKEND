import { Repository } from 'typeorm'
import { dataSource } from "../../../../database";
import { Filho } from '../../entities/Filho';
import { IFilhosRepository, ICreateFilhosDTO } from '../IFilhosRepository';


class FilhosRepository implements IFilhosRepository {

    private repository: Repository<Filho>

    constructor() {
        this.repository = dataSource.getRepository(Filho)
    }

    async create({ mae_id, name }: ICreateFilhosDTO): Promise<void> {
        const filho = this.repository.create({ mae_id, name })
        await this.repository.save(filho)
    }

    async findByName(name: string): Promise<Filho> {
        const filho = await this.repository.findOneBy({ name })
        return filho
    }

    async list(): Promise<Filho[]> {
        const filhos = await this.repository.find()
        return filhos
    }
    async listWithWhere(mae_id: string): Promise<Filho[]> {
        const filhos = await this.repository.createQueryBuilder("filhos")
            .where("filhos.mae_id = :mae_id", { mae_id: mae_id })
            .getMany()
        return filhos
    }

    async delete(id: string): Promise<void> {
        const filho = await this.repository.delete(id)
    }

    async update(name: string, id_filho: string): Promise<void> {

        await this.repository.createQueryBuilder()
            .update(Filho)
            .set({ name: name })
            .where("id = :id", { id: id_filho })
            .execute()

    }

}
export { FilhosRepository }