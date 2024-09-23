const execute = require('../connection');
const express = require('express');
const router = express.Router();


router.post("/listado_minmax", async(req,res)=>{

    const {token,codprod} = req.body;

    let qry = `
        SELECT INVSALDO.EMPNIT, EMPRESAS.NOMBRE AS SUCURSAL, 
            INVSALDO.CODPROD, 
            INVSALDO.MINIMO, INVSALDO.MAXIMO, 
            INVSALDO.HABILITADO, ISNULL(INVSALDO.OBS_MIN_MAX,'') AS NOTAS
        FROM     INVSALDO LEFT OUTER JOIN
                  EMPRESAS ON INVSALDO.EMPNIT = EMPRESAS.EMPNIT
        WHERE  (INVSALDO.CODPROD = '${codprod}')
        `

  
  
    execute.QueryToken(res,qry,token)

});



router.post("/update_minmax", async(req,res)=>{

    const {token,codprod,sucursal,minimo,maximo,notas} = req.body;

    let qry = `
        UPDATE INVSALDO SET 
            MINIMO=${minimo}, 
            MAXIMO=${maximo},
            OBS_MIN_MAX='${notas}'
        WHERE EMPNIT='${sucursal}' AND CODPROD='${codprod}';
        `

  
  
    execute.QueryToken(res,qry,token)

});





module.exports = router;

