import { Request, Response } from 'express'
import { CategoriesRepository } from '../../repositories/CategoriesRepository'
import { CreateCategoryUseCase } from '../createCategory/CreateCategoryUseCase'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

class ListCategoriesController {

    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    handle(req: Request, res: Response) {
        const all = this.listCategoriesUseCase.execute()
        return res.json(all)
    }

}
export { ListCategoriesController }