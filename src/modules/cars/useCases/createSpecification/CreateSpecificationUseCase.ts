import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
import { ISpecificationRepository } from "../../repositories/ISpecificationRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateSpecificationUseCase {

    constructor(
        @inject("SpecificationRepository")
        private specificationRepository: ISpecificationRepository) { }

    async execute({ description, name }: IRequest): Promise<void> {

        const specificationAlreadyExists = await this.specificationRepository.findByName(name)
        if (specificationAlreadyExists) {
            throw new Error("Specification Already Exists")
        }

        await this.specificationRepository.create({ description, name })
    }
}
export { CreateSpecificationUseCase }