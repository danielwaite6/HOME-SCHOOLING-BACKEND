import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateActiveUseCase } from './CreateActiveUseCase';

class CreateActiveController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, originalAppUserId } = req.body

        const createActiveUseCase = container.resolve(CreateActiveUseCase)
        await createActiveUseCase.execute({ user_id, originalAppUserId })
        return res.status(201).send()
    }

}
export { CreateActiveController }

