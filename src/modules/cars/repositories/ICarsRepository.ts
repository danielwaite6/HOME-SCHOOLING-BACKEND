import { ICreateCarDTO } from "../dtos/ICreateCarDTO"
import { Car } from "../entities/Car"

interface ICarsRepository {
    create(data: ICreateCarDTO): Promise<Car>
}
export { ICarsRepository }