import { Request, Response } from 'express'
import { container } from 'tsyringe'
import "reflect-metadata";
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {

    async handle(req: Request, res: Response): Promise<Response> {
        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase)
        const all = await listCategoriesUseCase.execute()

        //return res.send().json({ ok: "deu certo" })
        return res.json(all)
    }

}
export { ListCategoriesController }