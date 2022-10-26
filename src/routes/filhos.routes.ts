import { Router } from 'express'
import { CreateFilhoController } from '../modules/cars/useCases/createFilho/CreateFilhoController'
import { ListFilhosController } from '../modules/cars/useCases/listFilhos/ListFilhosController'
import { ListFilhosControllerSimple } from '../modules/cars/useCases/listFilhosSimple/ListFilhosControllerSimple'
import { DeleteFilhosController } from '../modules/cars/useCases/deleteFilhos/DeleteFilhosController'
import { UpdateFilhosController } from '../modules/cars/useCases/updateFilhos/UpdateFilhosController'



const filhosRoutes = Router()
// Repository --> Camada de acesso a dados.

const createFilhoController = new CreateFilhoController()
const listFilhosController = new ListFilhosController()
const listFilhosControllerSimple = new ListFilhosControllerSimple()
const deleteFilhosController = new DeleteFilhosController()
const updateFilhosController = new UpdateFilhosController()

filhosRoutes.post('/', createFilhoController.handle)
filhosRoutes.patch('/:id_filho', updateFilhosController.handle)



filhosRoutes.delete('/:id', deleteFilhosController.handle)
filhosRoutes.get('/', listFilhosControllerSimple.handle)
filhosRoutes.get('/:mae_id', listFilhosController.handle)



export { filhosRoutes }