import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IEmailUsersRepository } from "../../repositories/IEmailUsersRepository"
import { Email } from 'modules/cars/entities/Email';

interface IRequest {
    category_id?: string;
    name?: string;
}

@injectable()
class ListAllEmailsUsersUseCase {

    constructor(
        @inject("EmailUsersRepository")
        private emailUsersRepository: IEmailUsersRepository
    ) { }

    async execute(): Promise<Email[]> {
        const emails = await this.emailUsersRepository.list()
        return emails
    }
}
export { ListAllEmailsUsersUseCase }