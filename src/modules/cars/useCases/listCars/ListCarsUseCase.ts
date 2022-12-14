import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../../repositories/ICarsRepository"

interface IRequest {
    category_id?: string;
    name?: string;
}

@injectable()
class ListCarsUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }

    async execute({ category_id, name }: IRequest): Promise<Car[]> {
        const cars = await this.carsRepository.findAvailable(category_id, name)
        return cars
    }
}
export { ListCarsUseCase }