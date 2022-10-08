import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
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

    async execute(mae_id: string, filho_id: string): Promise<Activitys[]> {

        console.log('mae_id, filho_id: ', mae_id, filho_id);

        const cars = await this.activitysRepository.listWithWhere(mae_id, filho_id)
        return cars
    }
}
export { ListActivitysUseCase }