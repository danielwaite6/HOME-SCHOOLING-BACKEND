import { Router } from 'express'
import { CreateFilhoController } from '../modules/cars/useCases/createFilho/CreateFilhoController'



const filhosRoutes = Router()
// Repository --> Camada de acesso a dados.

const createFilhoController = new CreateFilhoController()

filhosRoutes.post('/', createFilhoController.handle)



export { filhosRoutes }