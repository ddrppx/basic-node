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
        const { firstName } = req.body.firstName;
        const { lastName } = req.body.lastName;
        const { birthday } = req.body.birthday;

        const create = user.create(firstName, lastName, birthday);

        return res.json(
            { message: "Success" }
        );
    }
    returnFunction(res, success, data){
        return res.json({
            success: success,
            data: data
        })
    }

}

module.exports = userController;
