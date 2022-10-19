import "reflect-metadata";
import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateActiveUseCase } from './CreateActiveUseCase';

class CreateActiveController {

    async handle(req: Request, res: Response): Promise<Response> {
        const { user_id, originalAppUserId, ativo } = req.body
        //console.log('user_id, originalAppUserId, ativo: ', user_id, originalAppUserId, ativo);
        let id = req.params.id;
        console.log('req.params.id: ', id);


        // const createActiveUseCase = container.resolve(CreateActiveUseCase)
        // await createActiveUseCase.execute({ user_id, originalAppUserId, ativo })
        return res.status(201).send()
    }

}
export { CreateActiveController }

