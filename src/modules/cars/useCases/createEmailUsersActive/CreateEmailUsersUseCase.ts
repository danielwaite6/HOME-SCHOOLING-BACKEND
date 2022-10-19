import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IEmailUsersRepository } from '../../repositories/IEmailUsersRepository'
import { Email } from 'modules/cars/entities/Email';


interface IRequest {
    user_id: string,
    email: string,
}

@injectable()
class CreateEmailUsersUseCase {

    constructor(
        @inject("EmailUsersRepository")
        private emailUsersRepository: IEmailUsersRepository
    ) { }

    async execute({ user_id, email }: IRequest): Promise<Email> {


        /*const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists");
        }*/
        try {
            const active = await this.emailUsersRepository.create({ user_id, email })
            return active
        } catch (error) {
            console.log("error: ", error);
        }




    }

}
export { CreateEmailUsersUseCase }


