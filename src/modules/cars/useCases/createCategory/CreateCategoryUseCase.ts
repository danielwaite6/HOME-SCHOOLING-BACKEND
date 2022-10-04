import { inject, injectable } from 'tsyringe'
import "reflect-metadata";
import { ICategoriesRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({ name, description }: IRequest): Promise<void> {


        try {
            /*const categoryAlreadyExists = await this.categoriesRepository.findByName(name)

            if (categoryAlreadyExists) {
                throw new Error("Category Already Exists.")
            }*/
            await this.categoriesRepository.create({ name, description })
        } catch (error) {
            throw new Error(error);
        }


    }
}
export { CreateCategoryUseCase }