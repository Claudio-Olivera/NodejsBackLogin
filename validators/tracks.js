const {check} = require("express-validator");
//todo validaciones con express validator
const validateResults = require("../utils/handleValidator")

const validatorCreateItem = [
    check("name").exists().notEmpty().isLength({min:3, max:90}),
    check("album").exists().notEmpty().isLength({min:2, max:90}),
    check("cover").exists().notEmpty().isLength({min:3, max:90}),
    check("artist").exists().notEmpty().isLength({min:3, max:90}),
    check("artist.name").exists().notEmpty().isLength({min:3, max:90}),
    check("artist.nickname").exists().notEmpty().isLength({min:2, max:90}),
    check("artist.nationality").exists().notEmpty().isLength({min:3, max:90}),
    check("duration").exists().notEmpty(),
    check("duration.start").exists().notEmpty(),
    check("duration.end").exists().notEmpty(),
    check("mediaId").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];


const validatorGetItem = [
    check("id").exists().notEmpty().isMongoId(),
    (req, res, next) => {
        return validateResults(req, res, next)
    }
];

module.exports = {validatorCreateItem, validatorGetItem}