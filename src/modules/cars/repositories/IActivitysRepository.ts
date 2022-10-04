import { ICreateActivityDTO } from "../dtos/ICreateActivityDTO"
import { Activitys } from "../entities/Activitys"

interface IActivitysRepository {
    create(data: ICreateActivityDTO): Promise<Activitys>;
    list(): Promise<Activitys[]>;
}
export { IActivitysRepository }