import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateFilhosUseCase } from './UpdateFilhosUseCase';

class UpdateFilhosController {

    async handle(req: Request, res: Response): Promise<Response> {
        const name = req.params.name
        console.log('req.params.name: ', name);


        const updateFilhosUseCase = container.resolve(UpdateFilhosUseCase)


        await updateFilhosUseCase.execute({ name })
        return res.status(201).send()
    }

}
export { UpdateFilhosController }

