import { Router } from 'express'
import { categoriesRoutes } from './categories.routes'
import { specificationsRoutes } from './specifications.routes'
import { carsRoutes } from './cars.routes'
import { filhosRoutes } from './filhos.routes';

const router = Router()

router.use("/categories", categoriesRoutes)
router.use("/specifications", specificationsRoutes)
router.use("/cars", carsRoutes)
router.use("/filhos", filhosRoutes)


router.use("/teste", () => {
    console.log("CONSEGUI ACESSAR A ROTA TESTE");
})

export { router }