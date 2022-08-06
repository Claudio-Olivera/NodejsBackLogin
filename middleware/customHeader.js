const customHeader = (req, res, next) => {

    try {
        const apiKey = req.headers.api_key;//todo fijarse muy bien que la clave que usemos para headers, en este caso api_key se nombre exactamente como llega. para ver como llega se puede usar console.log(req.headers)
        /* console.log(req.headers) */
        if(apiKey === 'algo'){ 
            next();
        }else{
            res.status(403);
            res.send({error:"API_KEY_NO_ES_CORRECTA"});
        }
        
    } catch (e) {
        res.status(403)
        res.send({error:"ALGO_OCURRIO_EN_EL_CUSTOM_HEADER"});
    }
}

module.exports = customHeader