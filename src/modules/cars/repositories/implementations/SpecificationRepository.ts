import { Repository } from 'typeorm'
import { dataSource } from "../../../../database";
import { Specification } from "../../entities/Specification";
import { ISpecificationRepository, ICreateSpecificationDTO } from "../ISpecificationRepository";

class SpecificationRepository implements ISpecificationRepository {

    private repository: Repository<Specification>

    constructor() {
        this.repository = dataSource.getRepository(Specification)
    }

    async create({ description, name }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repository.create({ description, name })
        await this.repository.save(specification)
    }

    async findByName(name: string): Promise<Specification> {
        const specification = await this.repository.findOneBy({ name })
        return specification
    }

}
export { SpecificationRepository }