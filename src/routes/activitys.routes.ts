import { Router } from 'express'
import { CreateActivitysController } from '../modules/cars/useCases/createActivitys/CreateActivitysController'
import { ListActivitysController } from '../modules/cars/useCases/listActivitys/ListActivitysController'

const activitysRoutes = Router()

const createActivitysController = new CreateActivitysController()
const listActivitysController = new ListActivitysController()

activitysRoutes.post('/', createActivitysController.handle)
activitysRoutes.get('/:mae_id/:filho_id/:dataInicial/:dataFinal', listActivitysController.handle)

export { activitysRoutes }

