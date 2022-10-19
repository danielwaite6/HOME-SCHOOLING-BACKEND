import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListAllEmailsUsersUseCase } from './ListAllEmailsUsersUseCase'

class ListAllEmailsUsersController {
    async handle(req: Request, res: Response): Promise<Response> {


        const listAllEmailsUsersUseCase = container.resolve(ListAllEmailsUsersUseCase)

        const activitys = await listAllEmailsUsersUseCase.execute()

        return res.status(201).json(activitys)

    }
}
export { ListAllEmailsUsersController }