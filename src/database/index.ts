import { createConnection, getConnectionOptions, Connection } from 'typeorm';


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
export { createConnectionn }

/*
interface IOptions {
    host: string;
}

getConnectionOptions().then(options => {
    const newOptions = options as IOptions;
    newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTE o nome dado ao service do banco de dados
    createConnection({
        ...options,
    });
})
*/
