import { Filho } from "../entities/Filho";

interface ICreateFilhosDTO {
    name: string;
    mae_id: string;
}

interface IFilhosRepository {

    create({ mae_id, name }: ICreateFilhosDTO): Promise<void>;
    findByName(name: string): Promise<Filho>;
    list(): Promise<Filho[]>;
    listWithWhere(mae_id: string): Promise<Filho[]>;
    delete(id: string): Promise<void>;
}


export { IFilhosRepository, ICreateFilhosDTO }