import { container } from 'tsyringe'
import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CarsRepository } from '../../modules/cars/repositories/implementations/CarsRepository'
import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository", SpecificationRepository
)

container.registerSingleton<ICarsRepository>(
    "CarsRepository", CarsRepository
)