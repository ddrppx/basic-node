const express = require('express');
const userModel = require('../models/userModel');

const user = new userModel()

class userController {
    async index(req, res){

        const data = await user.read();

        return res.json({
            success: true,
            data: data
        })    
    }       

    async indexID(req, res){
        const id = req.params.id;
        const data = await user.readOne(id);

        return res.json({
            success: true,
            data: data
        })      
    }

    async create(req, res){

        const { firstName, lastName, birthday } = req.body;

        const data = await user.create(firstName, lastName, birthday);
        
        return res.json(
            { 
                success: true,
                data: data
            }
        );
    }

    async update(req, res){
        const id = req.params.id;
        const { firstName, lastName } = req.body;

        const data = await user.update(id, firstName, lastName);

        return res.json(
            { 
                success: true,
                data: data
            }
        );
        
    }

    async delete(req, res){
        const id = req.params.id;

        const data = await user.delete(id);

        return res.json(
            { 
                success: true,
                data: data
            }
        );
    }
}

module.exports = userController;
