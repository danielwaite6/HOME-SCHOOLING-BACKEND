import { Router } from 'express'
import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController'
import { ListCategoriesController } from '../modules/cars/useCases/listCategories/ListCategoriesController'


const categoriesRoutes = Router()
// Repository --> Camada de acesso a dados.

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()


categoriesRoutes.post('/', createCategoryController.handle)

categoriesRoutes.get('/', listCategoriesController.handle)

export { categoriesRoutes }