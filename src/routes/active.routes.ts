import { Router } from 'express'
import { CreateActiveController } from '../modules/cars/useCases/createActive/CreateActiveController'
//import { ListActivitysController } from '../modules/cars/useCases/listActivitys/ListActivitysController'

const activeRoutes = Router()

const createActiveController = new CreateActiveController()

activeRoutes.post('/', createActiveController.handle)

export { activeRoutes }

