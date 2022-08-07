const express = require("express");
const { getItems,getItem ,createItem,updateItem, deleteItem } = require("../controllers/tracks");
const checkRol = require("../middleware/rol");
const router =  express.Router();
const authMiddleware = require("../middleware/session")
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")

//todo  http://localhost/tracks GET, POST , PUT , DELETE

/**Lista los items
 * 
 */
router.get("/", authMiddleware,getItems);
/**Obtener detalle
 * 
 */
router.get("/:id",authMiddleware,validatorGetItem ,getItem);
/**
 * Crear un registro de Items
 */
router.post("/",authMiddleware,checkRol(["admin"]),validatorCreateItem,createItem);
/**
 * 
 */
/**
 * Actualizar un registro
 */
 router.put("/:id",authMiddleware,validatorCreateItem ,validatorGetItem,updateItem);
/**
 * Eliminar un registro
 */
router.delete("/:id",authMiddleware,validatorGetItem,deleteItem)


module.exports=router