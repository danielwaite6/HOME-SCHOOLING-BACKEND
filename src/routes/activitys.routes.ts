import { Router } from 'express'
import { CreateActivitysController } from '../modules/cars/useCases/createActivitys/CreateActivitysController'

const activitysRoutes = Router()

const createActivitysController = new CreateActivitysController()

activitysRoutes.post('/', createActivitysController.handle)

export { activitysRoutes }