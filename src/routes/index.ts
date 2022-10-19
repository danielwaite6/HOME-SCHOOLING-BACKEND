import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'
import { carsRoutes } from './cars.routes'
import { filhosRoutes } from './filhos.routes';
import { activitysRoutes } from './activitys.routes';
import { activeRoutes } from './active.routes';
import { emailRoutes } from './email.routes';

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use("/cars", carsRoutes)
router.use("/filhos", filhosRoutes)
router.use("/atividades", activitysRoutes)
router.use("/ativo", activeRoutes)
router.use("/email", emailRoutes)



export { router }