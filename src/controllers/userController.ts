import { Request, Response } from 'express';
import { create, read, readSingle, update, deleteById } from '../models/dao/userDao';

class userController {
    async index(req: Request, res: Response){

        const data = await read();

        return res.json({
            success: true,
            data
        })    
    }       

    async indexID(req: Request, res: Response){
        const id: number = +req.params.id;
        const data = await readSingle(id);

        return res.json({
            success: true,
            data
        })      
    }

    async create(req: Request, res: Response){

        const { firstName, lastName, birthday } = req.body;

        const data = await create({firstName, lastName, birthday});
        
        return res.json(
            { 
                success: true,
                data
            }
        );
    }

    async update(req: Request, res: Response){
        const id: number = +req.params.id;
        const { firstName, lastName } = req.body;

        const data = await update(id, {id, firstName, lastName});

        return res.json(
            { 
                success: true,
                data
            }
        );
        
    }

    async delete(req: Request, res: Response){
        const id: number = +req.params.id;

        const data = await deleteById(id);

        return res.json(
            { 
                success: true,
                data
            }
        );
    }
}

export default userController;
