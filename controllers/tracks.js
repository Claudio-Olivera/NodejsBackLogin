const {tracksModel}= require('../models');
const {matchedData}= require("express-validator");
const {handleHttpError}= require("../utils/handleErrors")
/**
 * Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */

const getItems = async (req, res) =>{

    try {
        const data = await tracksModel.find({});
       res.send({data})

    } catch (e) {
        handleHttpError(res, 'ERROR_GET_ITEMS')
    }

};


/**
 * Obtener un detalle
 * @param {*} req 
 * @param {*} res 
 */

 const getItem =async (req, res) => {

    try {
        req =  matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
       res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_GET_ITEM")
    }

 };


/**
 * Insertar un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {

    try {
        const body = matchedData(req)
        const data = await tracksModel.create(body); 
        res.send({data});
    } catch (e) {
        handleHttpError(res, 'ERROR_CREATE_ITEMS')
    }
}


/**
 * Actualizar un registro
 * @param {*} req 
 * @param {*} res 
 */
 const updateItem= async  (req, res) => {
    try {
        const {id, ...body} =  matchedData(req);
        const data = await tracksModel.findByIdAndUpdate(
            id, body
        ); 
        res.send({ data });
    } catch (e) {
        handleHttpError(res, 'ERROR_UPDATE_ITEMS')
    }
 };


 
/**
 * Eliminar un registro
 * @param {*} req 
 * @param {*} res 
 */
 const deleteItem= async  (req, res) => {


    try {
        req =  matchedData(req);
        const {id} = req;
        const data = await tracksModel.delete({_id:id}); //todo pero si no quiero emplear el soft delete , puedo usar deleteOne, que si eliminara el registro realmente.
       res.send({data})
    } catch (e) {
        handleHttpError(res, "ERROR_DELETE_ITEM")
    }



 }



module.exports = {getItems, getItem, createItem, updateItem, deleteItem}; //todo aplicando destructuracion 
