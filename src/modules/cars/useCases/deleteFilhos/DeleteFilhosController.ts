import { Request, Response } from 'express'
import { container } from 'tsyringe'
import "reflect-metadata";
import { DeleteFilhosUseCase } from './DeleteFilhosUseCase'

class DeleteFilhosController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const deleteFilhosUseCase = container.resolve(DeleteFilhosUseCase)
            const filho = await deleteFilhosUseCase.execute(id);
            return res.json(filho)
        } catch (error) {

        }

    }

}
export { DeleteFilhosController }