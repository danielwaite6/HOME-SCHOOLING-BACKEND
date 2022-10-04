import { injectable, inject } from 'tsyringe'
import "reflect-metadata";
import { Car } from '../../entities/Car';
import { ICarsRepository } from '../../repositories/ICarsRepository';

interface IRequest {
    name: string;
    description: string;
    category_id: string;
}

@injectable()
class CreateCarUseCase {

    constructor(
        @inject("CarsRepository")
        private carsRepository: ICarsRepository
    ) { }

    async execute({ description, name, category_id }: IRequest): Promise<Car> {

        try {
            const car = await this.carsRepository.create({
                name, description, category_id,
            })
            return car
        } catch (error) {
            throw new Error(error);
        }


        //return car
    }
}
export { CreateCarUseCase }