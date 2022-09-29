import { Router } from 'express'
import { CreateFilhoController } from '../modules/cars/useCases/createFilho/CreateFilhoController'
import { ListFilhosController } from '../modules/cars/useCases/listFilhos/ListFilhosController'



const filhosRoutes = Router()
// Repository --> Camada de acesso a dados.

const createFilhoController = new CreateFilhoController()
const listFilhosController = new ListFilhosController()

filhosRoutes.post('/', createFilhoController.handle)
filhosRoutes.get('/', listFilhosController.handle)



export { filhosRoutes }