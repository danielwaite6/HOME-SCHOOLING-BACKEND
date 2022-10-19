import { IEmailUsersActiveDTO } from "../dtos/IEmailUsersActiveDTO"
import { Email } from "../entities/Email"

interface IEmailUsersRepository {
    //user_id, originalAppUserId, ativo
    create({ user_id, email }: IEmailUsersActiveDTO): Promise<Email>;

    list(): Promise<Email[]>;

    listWithWhere(user_id: string, originalAppUserId: string): Promise<Email[]>
}
export { IEmailUsersRepository }