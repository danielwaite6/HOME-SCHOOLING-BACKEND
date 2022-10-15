import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListActiveUseCase } from './ListActiveUseCase'

class ListActiveController {
    async handle(req: Request, res: Response): Promise<Response> {

        const user_id = req.params.user_id;
        const originalAppUserId = req.params.originalAppUserId;



        const listActiveUseCase = container.resolve(ListActiveUseCase)

        const active = await listActiveUseCase.execute(user_id, originalAppUserId)




        return res.status(201).json(active)
        //return res.status(201).json({})
    }
}
export { ListActiveController }