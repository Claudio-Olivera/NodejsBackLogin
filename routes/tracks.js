const express = require("express");
const { getItems,getItem ,createItem,updateItem, deleteItem } = require("../controllers/tracks");
const router =  express.Router();
const customHeader = require("../middleware/customHeader")
const {validatorCreateItem, validatorGetItem} = require("../validators/tracks")

//todo  http://localhost/tracks GET, POST , PUT , DELETE

/**Lista los items
 * 
 */
router.get("/", getItems);
/**Obtener detalle
 * 
 */
router.get("/:id",validatorGetItem ,getItem);
/**
 * Crear un registro de Items
 */
router.post("/", validatorCreateItem,createItem);
/**
 * 
 */
/**
 * Actualizar un registro
 */
 router.put("/:id",validatorCreateItem ,validatorGetItem,updateItem);
/**
 * Eliminar un registro
 */
router.delete("/:id",validatorGetItem,deleteItem)


module.exports=router