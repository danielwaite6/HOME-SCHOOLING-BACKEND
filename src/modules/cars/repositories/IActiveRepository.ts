import { ICreateActiveDTO } from "../dtos/ICreateActiveDTO"
import { Active } from "../entities/Active"

interface IActiveRepository {
    //user_id, originalAppUserId, ativo
    create({ user_id, originalAppUserId, ativo }: ICreateActiveDTO): Promise<Active>;

    list(): Promise<Active[]>;

    listWithWhere(user_id: string, originalAppUserId: string): Promise<Active[]>
}
export { IActiveRepository }