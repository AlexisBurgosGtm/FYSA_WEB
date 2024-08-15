const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/empresa_ventas_fechas", async(req,res)=>{
   
    const { token, sucursal, anio, mes,tipo} = req.body;

    let qry = `
    SELECT EMPRESAS.NOMBRE, DOCUMENTOS.FECHA, SUM(DOCUMENTOS.TOTALVENTA) AS IMPORTE
        FROM  DOCUMENTOS LEFT OUTER JOIN
            EMPRESAS ON DOCUMENTOS.EMPNIT = EMPRESAS.EMPNIT LEFT OUTER JOIN
            TIPODOCUMENTOS ON DOCUMENTOS.CODDOC = TIPODOCUMENTOS.CODDOC AND DOCUMENTOS.EMPNIT = TIPODOCUMENTOS.EMPNIT
        WHERE (DOCUMENTOS.EMPNIT='${sucursal}') 
            AND (DOCUMENTOS.ANIO = ${anio}) 
            AND (DOCUMENTOS.MES = ${mes}) 
            AND (DOCUMENTOS.STATUS <> 'A') 
            AND (TIPODOCUMENTOS.TIPODOC = '${tipo}')
        GROUP BY DOCUMENTOS.EMPNIT, EMPRESAS.NOMBRE, DOCUMENTOS.FECHA
    `
    
    execute.QueryToken(res,qry,token);
     
});


router.post("/empresas_ventas_fechas", async(req,res)=>{
   
    const { token, sucursal, anio, mes,tipo} = req.body;

    let qry = `
    SELECT EMPRESAS.NOMBRE, DOCUMENTOS.FECHA, SUM(DOCUMENTOS.TOTALVENTA) AS IMPORTE
        FROM  DOCUMENTOS LEFT OUTER JOIN
            EMPRESAS ON DOCUMENTOS.EMPNIT = EMPRESAS.EMPNIT LEFT OUTER JOIN
            TIPODOCUMENTOS ON DOCUMENTOS.CODDOC = TIPODOCUMENTOS.CODDOC AND DOCUMENTOS.EMPNIT = TIPODOCUMENTOS.EMPNIT
        WHERE (DOCUMENTOS.ANIO = ${anio}) 
            AND (DOCUMENTOS.MES = ${mes}) 
            AND (DOCUMENTOS.STATUS <> 'A') 
            AND (TIPODOCUMENTOS.TIPODOC = '${tipo}')
        GROUP BY EMPRESAS.NOMBRE, DOCUMENTOS.FECHA
    `
    
    execute.QueryToken(res,qry,token);
     
});





module.exports = router;

