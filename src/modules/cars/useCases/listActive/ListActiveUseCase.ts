import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IActiveRepository } from "../../repositories/IActiveRepository"
import { Active } from 'modules/cars/entities/Active';

interface IRequest {
    category_id?: string;
    name?: string;
}

@injectable()
class ListActiveUseCase {

    constructor(
        @inject("ActiveRepository")
        private activeRepository: IActiveRepository
    ) { }

    async execute(user_id: string, originalAppUserId: string): Promise<Active[]> {
        const active = await this.activeRepository.listWithWhere(user_id, originalAppUserId)
        return active
    }
}
export { ListActiveUseCase }