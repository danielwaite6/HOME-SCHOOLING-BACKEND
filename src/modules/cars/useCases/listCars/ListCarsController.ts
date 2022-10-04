import { Request, Response } from 'express'
import { container } from 'tsyringe'
import "reflect-metadata";
import { ListCarsUseCase } from './ListCarsUseCase'

class ListCarsController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { name, category_id } = req.query
        const listCarsUseCase = container.resolve(ListCarsUseCase)
        const cars = await listCarsUseCase.execute({
            name: name as string,
            category_id: category_id as string,
        })
        return res.status(201).json(cars)
    }
}
export { ListCarsController }