import "reflect-metadata";
import { inject, injectable } from 'tsyringe'
import { IFilhosRepository } from '../../repositories/IFilhosRepository'
import { Filho } from 'modules/cars/entities/Filho';


interface IRequest {
    name: string,
    id_filho: string,
}

@injectable()
class UpdateFilhosUseCase {

    constructor(
        @inject("FilhosRepository")
        private filhosRepository: IFilhosRepository
    ) { }

    async execute({ name, id_filho }: IRequest): Promise<void> {
        //console.log(name);

        /*const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists");
        }*/
        try {
            const filho = await this.filhosRepository.update(name, id_filho)

        } catch (error) {
            console.log("error: ", error);
        }




    }

}
export { UpdateFilhosUseCase }


