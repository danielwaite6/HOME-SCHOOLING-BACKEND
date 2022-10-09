import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListActivitysUseCase } from './ListActivitysUseCase'

class ListActivitysController {
    async handle(req: Request, res: Response): Promise<Response> {

        const mae_id = req.params.mae_id;
        const filho_id = req.params.filho_id;
        const dataInicial = req.params.dataInicial;
        const dataFinal = req.params.dataFinal;


        const listActivitysUseCase = container.resolve(ListActivitysUseCase)

        const activitys = await listActivitysUseCase.execute(mae_id, filho_id, dataInicial, dataFinal)




        return res.status(201).json(activitys)
        //return res.status(201).json({})
    }
}
export { ListActivitysController }