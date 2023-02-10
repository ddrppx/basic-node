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
        const user_data = await user.readOne(id);

        return res.json({
            success: true,
            data: user_data
        })      
    }

    async create(req, res){

        const { firstName, lastName, birthday } = req.body;

        const create = await user.create(firstName, lastName, birthday);

        return res.json(
            { 
                success: true,
                message: create
            }
        );
    }

    async update(req, res){
        const id = req.params.id;
        const { firstName, lastName } = req.body;
        let message;
        if (firstName.empty() || lastName.empty()) {
            message = "Fields can't be empty.";
        }else{

        }

        const update = await user.update(id, firstName, lastName);

        return res.json(
            { 
                success: true,
                message: update
            }
        );
        
    }

    async delete(req, res){
        const id = req.params.id;

        const del = await user.delete(id);

        if 
        return res.json(
            { 
                success: true,
                message: del
            }
        );
    }
}

module.exports = userController;
