import { container } from 'tsyringe'

import { CategoriesRepository } from '../../modules/cars/repositories/implementations/CategoriesRepository'
import { ICategoriesRepository } from '../../modules/cars/repositories/ICategoriesRepository'

import { SpecificationRepository } from '../../modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationRepository } from '../../modules/cars/repositories/ISpecificationRepository'


import { ICarsRepository } from '../../modules/cars/repositories/ICarsRepository'
import { CarsRepository } from '../../modules/cars/repositories/implementations/CarsRepository'


import { IFilhosRepository } from '../../modules/cars/repositories/IFilhosRepository'
import { FilhosRepository } from '../../modules/cars/repositories/implementations/FilhosRepository'


import { IActivitysRepository } from '../../modules/cars/repositories/IActivitysRepository'
import { ActivitysRepository } from '../../modules/cars/repositories/implementations/ActivitysRepository'


import { IActiveRepository } from '../../modules/cars/repositories/IActiveRepository'
import { ActiveRepository } from '../../modules/cars/repositories/implementations/ActiveRepository'


container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository", CategoriesRepository
)

container.registerSingleton<ISpecificationRepository>(
    "SpecificationRepository", SpecificationRepository
)

container.registerSingleton<ICarsRepository>(
    "CarsRepository", CarsRepository
)

container.registerSingleton<IFilhosRepository>(
    "FilhosRepository", FilhosRepository
)

container.registerSingleton<IActivitysRepository>(
    "ActivitysRepository", ActivitysRepository
)

container.registerSingleton<IActiveRepository>(
    "ActiveRepository", ActiveRepository
)









