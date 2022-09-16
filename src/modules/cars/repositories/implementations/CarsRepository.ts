import { Repository } from "typeorm";
import dataSource from "../../../../database";
import { ICreateCarDTO } from "../../dtos/ICreateCarDTO";
import { Car } from "../../entities/Car";
import { ICarsRepository } from "../ICarsRepository";

class CarsRepository implements ICarsRepository {

    private repository: Repository<Car>

    constructor() {
        this.repository = dataSource.getRepository(Car)
    }


    async create({ name, description, category_id }: ICreateCarDTO): Promise<Car> {
        const car = this.repository.create({
            name, description, category_id
        })
        await this.repository.save(car)
        return car
    }

    async findAvailable(category_id?: string, name?: string): Promise<Car[]> {
        console.log("category_id: ", category_id);
        console.log("name: ", name);

        const carsQuery = this.repository
            .createQueryBuilder("c")
            .where("available = :available", { available: true })

        if (name) {
            carsQuery.andWhere("c.name = :name", { name })
        }

        if (category_id) {
            carsQuery.andWhere("c.category_id = :category_id", { category_id })
        }

        const cars = await carsQuery.getMany()

        return cars
    }

}
export { CarsRepository }