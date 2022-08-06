const express = require("express");
const { loginCtrl, registerCtrl } = require("../controllers/auth");

const router =  express.Router();
const {validatorRegister, validatorLogin} = require("../validators/auth")

/** 
  * Crear un registro de Items
 */
router.post("/register",validatorRegister, registerCtrl);

router.post("/login",validatorLogin, loginCtrl);






module.exports=router;