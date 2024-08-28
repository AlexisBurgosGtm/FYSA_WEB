const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/anular_documento", async(req,res)=>{
   
    const { token, sucursal, coddoc,correlativo} = req.body;

    let qry = `UPDATE DOCUMENTOS SET STATUS='A' 
    WHERE EMPNIT='${sucursal}' AND CODDOC='${coddoc}' AND CORRELATIVO=${correlativo};`
    
    execute.QueryToken(res,qry,token);
     
});


router.post("/desanular_documento", async(req,res)=>{
   
    const { token, sucursal, coddoc,correlativo} = req.body;

    let qry = `UPDATE DOCUMENTOS SET STATUS='O' 
    WHERE EMPNIT='${sucursal}' AND CODDOC='${coddoc}' AND CORRELATIVO=${correlativo};`
    
    execute.QueryToken(res,qry,token);
     
});


router.post("/listado_documentos", async(req,res)=>{
   
    const { token, sucursal, anio, mes, tipo} = req.body;

    let qry = `SELECT  DOCUMENTOS.FECHA, DOCUMENTOS.CODDOC, DOCUMENTOS.CORRELATIVO, 
    DOCUMENTOS.DOC_NIT AS NIT, DOCUMENTOS.DOC_NOMCLIE AS NOMBRE, DOCUMENTOS.DOC_DIRCLIE AS DIRECCION, 
                DOCUMENTOS.TOTALCOSTO, DOCUMENTOS.TOTALVENTA, DOCUMENTOS.STATUS, DOCUMENTOS.USUARIO, DOCUMENTOS.CONCRE, 
                DOCUMENTOS.CODCAJA, DOCUMENTOS.NOCORTE, DOCUMENTOS.LAT, 
                DOCUMENTOS.LONG, DOCUMENTOS.ENTREGADO, TIPODOCUMENTOS.TIPODOC
        FROM  DOCUMENTOS LEFT OUTER JOIN
                         TIPODOCUMENTOS ON DOCUMENTOS.CODDOC = TIPODOCUMENTOS.CODDOC AND DOCUMENTOS.EMPNIT = TIPODOCUMENTOS.EMPNIT
    WHERE (DOCUMENTOS.EMPNIT = '${sucursal}') AND (DOCUMENTOS.ANIO = ${anio}) AND (DOCUMENTOS.MES = ${mes}) 
    AND (TIPODOCUMENTOS.TIPODOC = '${tipo}')`
    
    execute.QueryToken(res,qry,token);
     
});






module.exports = router;