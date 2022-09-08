import { ICreateCarDTO } from "../dtos/ICreateCarDTO"
import { Car } from "../entities/Car"

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>
    findAvailable(category_id?: string, name?: string): Promise<Car[]>
}
export { ICarsRepository }