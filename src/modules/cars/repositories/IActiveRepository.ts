import { ICreateActiveDTO } from "../dtos/ICreateActiveDTO"
import { Active } from "../entities/Active"

interface IActiveRepository {
    create({ user_id, originalAppUserId }: ICreateActiveDTO): Promise<Active>;
    //list(): Promise<Activitys[]>;
    listWithWhere(mae_id: string, filho_id: string): Promise<Active[]>
}
export { IActiveRepository }