import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateFilhosUseCase } from './UpdateFilhosUseCase';

class UpdateFilhosController {

    async handle(req: Request, res: Response): Promise<Response> {
        const id_filho = req.params.id_filho
        const { name } = req.body

        const updateFilhosUseCase = container.resolve(UpdateFilhosUseCase)


        await updateFilhosUseCase.execute({ name, id_filho })
        return res.status(201).send()
    }

}
export { UpdateFilhosController }

