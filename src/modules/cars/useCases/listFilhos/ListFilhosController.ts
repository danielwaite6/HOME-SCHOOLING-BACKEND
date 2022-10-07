import { Request, Response } from 'express'
import { container } from 'tsyringe'
import "reflect-metadata";
import { ListFilhosUseCase } from './ListFilhosUseCase'

class ListFilhosController {

    async handle(req: Request, res: Response): Promise<Response> {

        const { mae_id } = req.params
        console.log('mae_id mudei: ', mae_id);


        const listFilhosUseCase = container.resolve(ListFilhosUseCase)
        const all = await listFilhosUseCase.execute()

        return res.json(all)
    }

}
export { ListFilhosController }