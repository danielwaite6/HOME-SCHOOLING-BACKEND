import { Router } from 'express'
import { CreateActiveController } from '../modules/cars/useCases/createActive/CreateActiveController'
import { ListActiveController } from '../modules/cars/useCases/listActive/ListActiveController'
import { ListActiveAllController } from '../modules/cars/useCases/listActiveAll/ListActiveAllController'

const activeRoutes = Router()

const createActiveController = new CreateActiveController()
const listActiveController = new ListActiveController()
const listActiveAllController = new ListActiveAllController()

activeRoutes.post('/', createActiveController.handle)


activeRoutes.get('/:user_id', listActiveController.handle)


activeRoutes.get('/', listActiveAllController.handle)


export { activeRoutes }

