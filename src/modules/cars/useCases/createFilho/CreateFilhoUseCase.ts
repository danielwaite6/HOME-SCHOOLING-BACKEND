import { inject, injectable } from 'tsyringe'
import { IFilhosRepository } from '../../repositories/IFilhosRepository'

interface IRequest {
    name: string;
    mae_id: string;
}

@injectable()
class CreateFilhoUseCase {

    constructor(
        @inject("FilhosRepository")
        private filhosRepository: IFilhosRepository
    ) { }

    async execute({ mae_id, name }: IRequest): Promise<void> {

        const filhoAlreadyExists = await this.filhosRepository.findByName(name)
        if (filhoAlreadyExists) {
            throw new Error("Specification Already Exists")
        }

        await this.filhosRepository.create({ mae_id, name })
    }

}
export { CreateFilhoUseCase }


