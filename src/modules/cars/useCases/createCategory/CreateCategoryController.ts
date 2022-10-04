import { Request, Response } from 'express'
import "reflect-metadata";
import { container } from 'tsyringe'
import { CreateCategoryUseCase } from './CreateCategoryUseCase'

class CreateCategoryController {


    async handle(req: Request, res: Response): Promise<Response> {
        const { name, description } = req.body

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase)

        await createCategoryUseCase.execute({ name, description })

        return res.status(200).send()

        //return res.json({ name, description })
    }

}
export { CreateCategoryController }