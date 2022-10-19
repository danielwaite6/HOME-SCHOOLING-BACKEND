import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateEmailUsersUseCase } from './CreateEmailUsersUseCase';

class CreateEmailUsersController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, originalAppUserId, ativo } = req.body


        const createEmailUsersUseCase = container.resolve(CreateEmailUsersUseCase)
        await createEmailUsersUseCase.execute({ user_id, originalAppUserId, ativo })
        return res.status(201).send()
    }

}
export { CreateEmailUsersController }

