import { container } from 'tsyringe'

import { ICategoriesRepository } from 'modules/cars/repositories/ICategoriesRepository'
import { CategoriesRepository } from 'modules/cars/repositories/implementations/CategoriesRepository'

import { SpecificationRepository } from 'modules/cars/repositories/implementations/SpecificationRepository'
import { ISpecificationRepository } from 'modules/cars/repositories/ISpecificationRepository'


import { ICarsRepository } from 'modules/cars/repositories/ICarsRepository'
import { CarsRepository } from 'modules/cars/repositories/implementations/CarsRepository'


import { IFilhosRepository } from 'modules/cars/repositories/IFilhosRepository'
import { FilhosRepository } from 'modules/cars/repositories/implementations/FilhosRepository'


import { IActivitysRepository } from 'modules/cars/repositories/IActivitysRepository'
import { ActivitysRepository } from 'modules/cars/repositories/implementations/ActivitysRepository'
//entities: [Category, Specification, Car, Filho, Activitys],

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









