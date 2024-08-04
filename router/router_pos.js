const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/productos_filtro", async(req,res)=>{
   
    const { token, sucursal, filtro, tipoprecio } = req.body;

    let qry = `
        SELECT PRODUCTOS.CODPROD, 
            PRODUCTOS.CODPROD2, 
            PRODUCTOS.DESPROD, 
            PRODUCTOS.DESPROD2, 
            PRODUCTOS.DESPROD3, 
            PRODUCTOS.CODMARCA, 
            MARCAS.DESMARCA, 
            PRODUCTOS.TIPOPROD, 
            PRECIOS.CODMEDIDA, 
            PRECIOS.EQUIVALE, 
            PRECIOS.COSTO, 
            PRECIOS.${tipoprecio} AS PRECIO, 
            INVSALDO.EMPNIT, 
            INVSALDO.EXISTENCIA,
            PRODUCTOS.NF AS COLOR
        FROM  PRODUCTOS LEFT OUTER JOIN
            INVSALDO ON PRODUCTOS.CODPROD = INVSALDO.CODPROD LEFT OUTER JOIN
            MARCAS ON PRODUCTOS.CODMARCA = MARCAS.CODMARCA LEFT OUTER JOIN
            PRECIOS ON PRODUCTOS.CODPROD = PRECIOS.CODPROD
        WHERE (PRODUCTOS.HABILITADO = 'SI') 
            AND (PRODUCTOS.DESPROD LIKE '%${filtro}%') 
            AND (PRECIOS.CODMEDIDA IS NOT NULL) 
            AND (INVSALDO.EMPNIT = '${sucursal}') 
        OR
            (PRODUCTOS.HABILITADO = 'SI') 
            AND (PRECIOS.CODMEDIDA IS NOT NULL) 
            AND (PRODUCTOS.CODPROD = '${filtro}')
            AND (INVSALDO.EMPNIT = '${sucursal}')`
    
    execute.QueryToken(res,qry,token);
     
});


router.post("/productos_precio", async(req,res)=>{
   
    const { token, sucursal, codprod, codmedida } = req.body;

    let qry = `SELECT CODPROD, CODMEDIDA, EQUIVALE, 
                COSTO, PRECIO, MAYOREOA,MAYOREOB,MAYOREOC 
                FROM PRECIOS 
                WHERE EMPNIT='${sucursal}' 
                AND CODPROD='${codprod}' 
                AND CODMEDIDA='${codmedida}';`
    
    console.log(qry);

    execute.QueryToken(res,qry,token);
     
});





module.exports = router;