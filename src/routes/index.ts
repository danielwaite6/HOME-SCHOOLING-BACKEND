import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'
import { carsRoutes } from './cars.routes'
import { filhosRoutes } from './filhos.routes';
import { activitysRoutes } from './activitys.routes';

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use("/cars", carsRoutes)
router.use("/filhos", filhosRoutes)
router.use("/atividades", activitysRoutes)



export { router }