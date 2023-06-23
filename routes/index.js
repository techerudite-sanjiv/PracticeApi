const { Router }=require('express');
const indexController= require('../controller/userData')
const authController= require('../controller/auth')
const checkUserAuth = require('../middlewares/authMiddleware')
const User =require('../models/User');


const route=new Router()

//Route Level middleware - to protect route



// USER RELATED API LIST
route.get('/getUser',checkUserAuth,indexController.getSingleUser)
route.get('/getUsers',checkUserAuth,indexController.getAllUserData)
route.post('/updateUser',checkUserAuth,indexController.updateUserData)
route.post('/deleteUser',checkUserAuth,indexController.deleteUserData)


// Auth Controller api list
route.post('/userLogin',authController.userLogin)
route.post('/userRegister',authController.userRegister)
route.post('/changePassword',authController.changePassword)
route.post('/sendPasswordEmail',authController.sendUserPasswordEmail)



module.exports=route



