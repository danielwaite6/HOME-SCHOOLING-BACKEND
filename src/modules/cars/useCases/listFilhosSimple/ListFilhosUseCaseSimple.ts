import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
import { IFilhosRepository } from "../../repositories/IFilhosRepository";
import { Filho } from "modules/cars/entities/Filho";

@injectable()
class ListFilhosUseCaseSimple {
    constructor(
        @inject("FilhosRepository")
        private filhosRepository: IFilhosRepository
    ) { }

    async execute(): Promise<Filho[]> {
        const filhos = await this.filhosRepository.list()
        return filhos
    }
}
export { ListFilhosUseCaseSimple }