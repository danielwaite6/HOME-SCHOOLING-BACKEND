import { Repository } from 'typeorm'
import { dataSource } from "../../../../database";
import { Email } from '../../entities/Email';
import { IEmailUsersRepository } from '../IEmailUsersRepository';
import { IEmailUsersActiveDTO } from '../../dtos/IEmailUsersActiveDTO';


class EmailUsersRepository implements IEmailUsersRepository {

    private repository: Repository<Email>

    constructor() {
        this.repository = dataSource.getRepository(Email)
    }

    async create({ user_id, email }: IEmailUsersActiveDTO): Promise<Email> {

        try {

            const emaill = this.repository.create({ user_id, email })
            const emailll = await this.repository.save(emaill)


            return emailll

        } catch (error) {
            console.log('Error: ', error);
        }


    }


    async listWithWhere(user_id: string, _: string): Promise<Email[]> {

        const activity = await this.repository.createQueryBuilder("email")
            .where("active.user_id = :user_id", { user_id })
            .getMany();
        //.where("activitys.dia >= :dataInicial", { dataInicial })
        //.where("activitys.dia <= :dataFinal", { dataFinal })
        //console.log('activity: ', activity);

        return activity
    }


    async list(): Promise<Email[]> {
        const email = await this.repository.find()
        return email
    }

}
export { EmailUsersRepository }