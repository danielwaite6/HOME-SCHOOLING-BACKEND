import { Router } from 'express'
import { CreateFilhoController } from '../modules/cars/useCases/createFilho/CreateFilhoController'
import { ListFilhosController } from '../modules/cars/useCases/listFilhos/ListFilhosController'
import { DeleteFilhosController } from '../modules/cars/useCases/deleteFilhos/DeleteFilhosController'



const filhosRoutes = Router()
// Repository --> Camada de acesso a dados.

const createFilhoController = new CreateFilhoController()
const listFilhosController = new ListFilhosController()
const deleteFilhosController = new DeleteFilhosController()

filhosRoutes.post('/', createFilhoController.handle)
filhosRoutes.get('/', listFilhosController.handle)
filhosRoutes.delete('/:id', deleteFilhosController.handle)



export { filhosRoutes }