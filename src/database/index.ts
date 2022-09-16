import { DataSource } from 'typeorm';
import { Category } from '../modules/cars/entities/Category';
import { Car } from '../modules/cars/entities/Car';
import { Specification } from '../modules/cars/entities/Specification';
import { Filho } from '../modules/cars/entities/Filho';

import { CreateCategories1662308680053 } from '../database/migrations/1662308680053-CreateCategories';
import { CreateCars1662516676249 } from '../database/migrations/1662516676249-CreateCars';
import { CreateSpecifications1662515145406 } from '../database/migrations/1662515145406-CreateSpecifications';
import { CreateFilho1662685219496 } from '../database/migrations/1662685219496-CreateFilho';


const dataSource = new DataSource({
    type: "postgres",
    port: 5432,
    username: "postgres",
    password: "postgres",
    database: "postgres",
    entities: [Category, Car, Specification, Filho],
    migrations: [
        CreateCategories1662308680053,
        CreateCars1662516676249,
        CreateSpecifications1662515145406,
        CreateFilho1662685219496,
    ],
});

export function createConnection(): Promise<DataSource> {
    return dataSource.setOptions({}).initialize();
}

export default dataSource;


/*
async function createConnectionn(): Promise<Connection> {
    const defaultOptions = await getConnectionOptions()

    return createConnection(
        Object.assign(defaultOptions, {
            name: "default",
            database: "postgres",
            type: "postgres",
            port: "5432",
            host: "localhost",
            username: "postgres",
            password: "postgres",


        })
    )
}
export { createConnectionn }*/

/*
interface IOptions {
    host: string;
    type: string;
    port: number;
    username: string;
    password: string;
    database: string;
    entities: Array<object>;
}*/
/*
getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
    newOptions.type = "postgres";
    newOptions.port = 5432;
    newOptions.username = "postgres";
    newOptions.password = "postgres";
    newOptions.database = "postgres";
    newOptions.entities = [Category];
    createConnection({
        ...options,
    });
})
*/
