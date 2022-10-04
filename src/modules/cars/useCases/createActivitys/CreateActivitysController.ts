import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateActivityUseCase } from './CreateActivityUseCase';

class CreateActivitysController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { filho_id, name, mae_id, atividadeEducativa, observacoes, dia, hora } = req.body

        const createActivityUseCase = container.resolve(CreateActivityUseCase)
        await createActivityUseCase.execute({ filho_id, name, mae_id, atividadeEducativa, observacoes, dia, hora })
        return res.status(201).send()
    }

}
export { CreateActivitysController }


//