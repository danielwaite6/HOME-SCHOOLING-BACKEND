import { Router } from 'express'
import { CreateEmailUsersController } from '../modules/cars/useCases/createEmailUsersActive/CreateEmailUsersController'
import { ListAllEmailsUsersController } from '../modules/cars/useCases/listAllEmailsUsers/ListAllEmailsUsersController'


const emailRoutes = Router()



const listAllEmailsUsersController = new ListAllEmailsUsersController()
const createEmailUsersController = new CreateEmailUsersController()

emailRoutes.post('/', createEmailUsersController.handle)


emailRoutes.get('/', listAllEmailsUsersController.handle)


export { emailRoutes }

