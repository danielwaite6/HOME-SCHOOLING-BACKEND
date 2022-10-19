import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IActiveRepository } from "../../repositories/IActiveRepository"
import { Active } from 'modules/cars/entities/Active';

interface IRequest {
    category_id?: string;
    name?: string;
}

@injectable()
class ListActiveAllUseCase {

    constructor(
        @inject("ActiveRepository")
        private activeRepository: IActiveRepository
    ) { }

    async execute(): Promise<Active[]> {
        const active = await this.activeRepository.list()
        //console.log(active);

        return active
    }
}
export { ListActiveAllUseCase }