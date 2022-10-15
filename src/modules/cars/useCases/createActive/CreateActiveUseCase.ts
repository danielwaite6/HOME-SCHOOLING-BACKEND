import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IActiveRepository } from '../../repositories/IActiveRepository'
import { Active } from 'modules/cars/entities/Active';


interface IRequest {
    user_id: string,
    originalAppUserId: string,
}

@injectable()
class CreateActiveUseCase {

    constructor(
        @inject("ActiveRepository")
        private activeRepository: IActiveRepository
    ) { }

    async execute({ user_id, originalAppUserId }: IRequest): Promise<Active> {

        /*const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists");
        }*/
        try {
            const active = await this.activeRepository.create({ user_id, originalAppUserId })
            return active
        } catch (error) {
            console.log("error: ", error);
        }




    }

}
export { CreateActiveUseCase }


