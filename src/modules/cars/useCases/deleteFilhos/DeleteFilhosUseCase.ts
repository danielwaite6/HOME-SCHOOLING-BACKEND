import { IFilhosRepository } from "../../repositories/IFilhosRepository";
import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
//import { Filho } from "modules/cars/entities/Filho";

@injectable()
class DeleteFilhosUseCase {
    constructor(
        @inject("FilhosRepository")
        private filhosRepository: IFilhosRepository
    ) { }

    async execute(id: string): Promise<void> {
        await this.filhosRepository.delete(id)
    }
}
export { DeleteFilhosUseCase }