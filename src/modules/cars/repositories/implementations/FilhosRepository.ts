import { getRepository, Repository } from 'typeorm'
import { Filho } from '../../entities/Filho';
import { IFilhosRepository, ICreateFilhosDTO } from '../IFilhosRepository';


class FilhosRepository implements IFilhosRepository {

    private repository: Repository<Filho>

    constructor() {
        this.repository = getRepository(Filho)
    }

    async create({ mae_id, name }: ICreateFilhosDTO): Promise<void> {
        const filho = this.repository.create({ mae_id, name })
        await this.repository.save(filho)
    }

    async findByName(name: string): Promise<Filho> {
        const filho = await this.repository.findOne({ name })
        return filho
    }

}
export { FilhosRepository }