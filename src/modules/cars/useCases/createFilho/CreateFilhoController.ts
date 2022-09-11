import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateFilhoUseCase } from './CreateFilhoUseCase';

class CreateFilhoController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { name, mae_id } = req.body


        const createFilhoUseCase = container.resolve(CreateFilhoUseCase)
        await createFilhoUseCase.execute({ mae_id, name })
        return res.status(201).send()
    }

}
export { CreateFilhoController }