import { Request, Response } from 'express'
import "reflect-metadata";
import { container } from 'tsyringe'
import { CreateCarUseCase } from './CreateCarUseCase'

class CreateCarController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { description, name, category_id } = req.body
        const createCarsUseCase = container.resolve(CreateCarUseCase)
        const car = await createCarsUseCase.execute({ description, name, category_id })
        return res.status(201).json(car)
    }

}
export { CreateCarController }