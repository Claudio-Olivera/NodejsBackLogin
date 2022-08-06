const express= require ("express");
const router = express.Router();
const uploadMiddleware =  require("../utils/handleStorage")
//todo http:localhost:3000/api/storage
const {createItem, getItem, getItems, deleteItem}=require ("../controllers/storage");
const {validatorGetItem}= require("../validators/storage");

/**
 * Lista de items
 */
router.get("/",getItems);
/**
 * Detalle de item
 */
router.get("/:id",validatorGetItem,getItem );
/**
 * Eliminar item
 */

router.delete("/:id",validatorGetItem,deleteItem );
/**
 * Crear item
 */
router.post("/",uploadMiddleware.single("myfile"), createItem);


module.exports =  router;