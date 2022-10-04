import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
import { IActivitysRepository } from "../../repositories/IActivitysRepository"
import { Activitys } from 'modules/cars/entities/Activitys';

interface IRequest {
    category_id?: string;
    name?: string;
}

@injectable()
class ListActivitysUseCase {

    constructor(
        @inject("ActivitysRepository")
        private activitysRepository: IActivitysRepository
    ) { }

    async execute(): Promise<Activitys[]> {
        const cars = await this.activitysRepository.list()
        return cars
    }
}
export { ListActivitysUseCase }