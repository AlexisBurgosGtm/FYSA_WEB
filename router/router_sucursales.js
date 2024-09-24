const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/sucursales_precio", async(req,res)=>{

    const {token,precio} = req.body;

    let qry = `
        SELECT EMPNIT,NOMBRE, ISNULL(DISTRITO,0) AS DISTRITO 
        FROM EMPRESAS 
        WHERE TIPO_PRECIO='${precio}'
        `     
  
    execute.QueryToken(res,qry,token)

});




module.exports = router;

