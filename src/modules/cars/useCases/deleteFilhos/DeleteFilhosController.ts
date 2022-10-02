import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteFilhosUseCase } from './DeleteFilhosUseCase'

class DeleteFilhosController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { id } = req.params

        try {
            const deleteFilhosUseCase = container.resolve(DeleteFilhosUseCase)
            await deleteFilhosUseCase.execute(id)
        } catch (error) {
            return res.json({ ok: "OK" })
        }

    }

}
export { DeleteFilhosController }