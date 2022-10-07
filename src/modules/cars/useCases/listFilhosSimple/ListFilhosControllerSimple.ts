import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListFilhosUseCaseSimple } from './ListFilhosUseCaseSimple'

class ListFilhosControllerSimple {

    async handle(req: Request, res: Response): Promise<Response> {

        const listFilhosUseCaseSimple = container.resolve(ListFilhosUseCaseSimple)
        const all = await listFilhosUseCaseSimple.execute()

        return res.json(all)
    }

}
export { ListFilhosControllerSimple }