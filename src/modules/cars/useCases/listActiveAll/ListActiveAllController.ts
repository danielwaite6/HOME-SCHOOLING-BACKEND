import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListActiveAllUseCase } from './ListActiveAllUseCase'

class ListActiveAllController {
    async handle(req: Request, res: Response): Promise<Response> {

        /*const user_id = req.params.user_id;
        const originalAppUserId = req.params.originalAppUserId;
        */


        const listActiveAllUseCase = container.resolve(ListActiveAllUseCase)

        const active = await listActiveAllUseCase.execute()

        return res.status(201).json(active)

    }
}
export { ListActiveAllController }