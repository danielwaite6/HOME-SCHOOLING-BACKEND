import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IActiveRepository } from '../../repositories/IActiveRepository'
import { Active } from 'modules/cars/entities/Active';


interface IRequest {
    user_id: string,
    originalAppUserId: string,
    ativo: boolean,
}

@injectable()
class CreateEmailUsersUseCase {

    constructor(
        @inject("ActiveRepository")
        private activeRepository: IActiveRepository
    ) { }

    async execute({ user_id, originalAppUserId, ativo }: IRequest): Promise<Active> {
        console.log(user_id, originalAppUserId, ativo);

        /*const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists");
        }*/
        try {
            const active = await this.activeRepository.create({ user_id, originalAppUserId, ativo })
            return active
        } catch (error) {
            console.log("error: ", error);
        }




    }

}
export { CreateEmailUsersUseCase }


