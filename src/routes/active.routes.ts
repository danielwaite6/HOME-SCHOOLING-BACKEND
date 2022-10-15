import { Router } from 'express'
import { CreateActiveController } from '../modules/cars/useCases/createActive/CreateActiveController'
import { ListActiveController } from '../modules/cars/useCases/listActive/ListActiveController'

const activeRoutes = Router()

const createActiveController = new CreateActiveController()
const listActiveController = new ListActiveController()

activeRoutes.post('/', createActiveController.handle)

activeRoutes.get('/:user_id', listActiveController.handle)

export { activeRoutes }

