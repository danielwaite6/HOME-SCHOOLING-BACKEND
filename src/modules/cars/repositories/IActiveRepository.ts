import { ICreateActiveDTO } from "../dtos/ICreateActiveDTO"
import { Active } from "../entities/Active"

interface IActiveRepository {
    create({ user_id, originalAppUserId }: ICreateActiveDTO): Promise<Active>;
    //list(): Promise<Activitys[]>;
    listWithWhere(user_id: string, originalAppUserId: string): Promise<Active[]>
}
export { IActiveRepository }