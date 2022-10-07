import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
import { IFilhosRepository } from "../../repositories/IFilhosRepository";
import { Filho } from "modules/cars/entities/Filho";

@injectable()
class ListFilhosUseCase {
    constructor(
        @inject("FilhosRepository")
        private filhosRepository: IFilhosRepository
    ) { }

    async execute(mae_id: string): Promise<Filho[]> {
        const filhos = await this.filhosRepository.listWithWhere(mae_id)
        return filhos
    }
}
export { ListFilhosUseCase }