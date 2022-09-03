import { Router } from 'express'
import { createCategoryController } from '../modules/cars/useCases/createCategory'
import { listCategoriesController } from '../modules/cars/useCases/listCategories'


const categoriesRoutes = Router()
// Repository --> Camada de acesso a dados.


categoriesRoutes.post('/', (req, res) => {
    return createCategoryController.handle(req, res)
})

categoriesRoutes.get('/', (req, res) => {
    return listCategoriesController.handle(req, res)
})

export { categoriesRoutes }