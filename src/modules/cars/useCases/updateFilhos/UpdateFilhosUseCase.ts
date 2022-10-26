import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IFilhosRepository } from '../../repositories/IFilhosRepository'
import { Filho } from 'modules/cars/entities/Filho';


interface IRequest {
    name: string,
}

@injectable()
class UpdateFilhosUseCase {

    constructor(
        @inject("FilhosRepository")
        private filhosRepository: IFilhosRepository
    ) { }

    async execute({ name }: IRequest): Promise<Filho> {
        //console.log(name);

        /*const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists");
        }*/
        try {
            const filho = await this.filhosRepository.update(name)
            return filho
        } catch (error) {
            console.log("error: ", error);
        }




    }

}
export { UpdateFilhosUseCase }


