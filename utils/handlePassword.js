const bcryptjs =  require("bcryptjs")

/**
 * Constraseña som encriptar: hola.01
 * @param {*} passwordPlain 
 */
const encrypt = async(passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10)
    //todo "sads12123ws123o3sdg4pkk1243"
    return hash
};

/**
 * Pasar contraseña sin encriptar y pasar constraseña encriptada
 * @param {*} passwordPlain 
 * @param {*} hashPassword 
 */
const compare = async(passwordPlain , hashPassword) => {
    return await bcryptjs.compare(passwordPlain , hashPassword)
}

module.exports = {encrypt, compare};