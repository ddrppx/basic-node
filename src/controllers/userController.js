const express = require('express');
const userModel = require('../models/userModel');

const user = new userModel()
class userController {
    async index(req, res){

        let user_list = await user.read();
        
        return res.json({
                message: "Homepage", 
                data: user_list    
        });
    }       

}

module.exports = userController;
