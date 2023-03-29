import { Request, Response } from 'express';
import { create, read, readSingle, update, deleteById } from '../models/dao/userDao';
import { UserOutput } from '../models/User';

class userController {
    async index(req: Request, res: Response){
        const data: UserOutput[] = await read();
        let msg: string;
        let success: boolean = true;
        if(data){
            success = true;
            msg = "Retrieved all users.";
        } else {
            success = false;
            msg = "Error.";
        }

        return res.json({success, msg, data})    
    }       

    async indexID(req: Request, res: Response){
        let data: UserOutput | null = null;
        let msg: string;
        let success: boolean = false;

        const id: number = parseInt(req.params.id);

        if(id){
            data = await readSingle(id);
        }

        if(!data) {
            success = false;
            msg = "User not found. Insert a valid user id number.";
        } else {
            success = true;
            msg = "User successfully found.";
        }

        return res.json({success, msg, data})      
    }

    async create(req: Request, res: Response){
        let success: boolean = false;
        let msg: string;

        const { firstName, lastName, birthday } = req.body;
        const data = await create({firstName, lastName, birthday});
        if (data) {
            success = true;
            msg = "User created successfully."
        } else {
            success = false;
            msg = "Error on user creation."
        }
        return res.json({success, msg, data});
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
