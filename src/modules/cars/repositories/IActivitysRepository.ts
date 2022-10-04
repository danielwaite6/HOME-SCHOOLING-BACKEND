import { ICreateActivityDTO } from "../dtos/ICreateActivityDTO"
import { Activitys } from "../entities/Activitys"

interface IActivitysRepository {
    create(data: ICreateActivityDTO): Promise<Activitys>
}
export { IActivitysRepository }