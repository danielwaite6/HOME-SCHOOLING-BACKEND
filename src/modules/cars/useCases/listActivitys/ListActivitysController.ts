import { Request, Response } from 'express'
import { container } from 'tsyringe'
import "reflect-metadata";
import { ListActivitysUseCase } from './ListActivitysUseCase'

class ListActivitysController {
    async handle(req: Request, res: Response): Promise<Response> {
        //const { name, category_id } = req.query
        const listActivitysUseCase = container.resolve(ListActivitysUseCase)
        const activitys = await listActivitysUseCase.execute()
        return res.status(201).json(activitys)
    }
}
export { ListActivitysController }