import { Activitys } from 'modules/cars/entities/Activitys';
import { inject, injectable } from 'tsyringe'
import { IActivitysRepository } from '../../repositories/IActivitysRepository'

interface IRequest {
    filho_id: string,
    name: string,
    mae_id: string,
    atividadeEducativa: string,
    observacoes: string,
    dia: string,
    hora: string,
}

@injectable()
class CreateActivityUseCase {

    constructor(
        @inject("ActivitysRepository")
        private activitysRepository: IActivitysRepository
    ) { }

    async execute({ filho_id, name, mae_id, atividadeEducativa, observacoes, dia, hora }: IRequest): Promise<Activitys> {

        /*const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists");
        }*/
        try {
            const activity = await this.activitysRepository.create({ filho_id, name, mae_id, atividadeEducativa, observacoes, dia, hora })
            return activity
        } catch (error) {
            console.log("error: ", error);
        }




    }

}
export { CreateActivityUseCase }


