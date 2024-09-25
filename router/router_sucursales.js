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


router.post("/sucursales_existencia_producto", async(req,res)=>{

    const {token,codprod} = req.body;

    let qry = `
       SELECT INVSALDO.EMPNIT, EMPRESAS.NOMBRE AS NOMEMPRESA, INVSALDO.CODPROD, 
			INVSALDO.MINIMO, INVSALDO.MAXIMO, INVSALDO.EXISTENCIA, (INVSALDO.MAXIMO - INVSALDO.EXISTENCIA) AS RELLENO 
        FROM     INVSALDO LEFT OUTER JOIN
                  EMPRESAS ON INVSALDO.EMPNIT = EMPRESAS.EMPNIT
        WHERE  (INVSALDO.CODPROD = '${codprod}')
        ORDER BY INVSALDO.EMPNIT
        `     
  
    execute.QueryToken(res,qry,token)

});



module.exports = router;

