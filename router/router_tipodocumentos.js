const execute = require('./../connection');
const express = require('express');
const router = express.Router();


router.post("/coddoc", async(req,res)=>{
   
    const { token, sucursal, tipo } = req.body;


    let qry = ``
    
    switch (tipo.toString()) {
        case 'FAC':
            qry = `SELECT CODDOC FROM TIPODOCUMENTOS WHERE EMPNIT='${sucursal}' AND TIPODOC='FAC';`
            break;
        case 'FEL':
            qry = `SELECT CODDOC FROM TIPODOCUMENTOS WHERE EMPNIT='${sucursal}' AND TIPODOC IN('FEF','FEC');`
            break;

        default:
            qry = `SELECT CODDOC FROM TIPODOCUMENTOS WHERE EMPNIT='${sucursal}' AND TIPODOC='${tipo}';`
            break;
    }


    execute.QueryToken(res,qry,token);
     
});


router.post("/correlativo", async(req,res)=>{
   
    const { token, sucursal, coddoc } = req.body;


    let qry = ``
    
    qry = `SELECT CORRELATIVO FROM TIPODOCUMENTOS 
        WHERE    
        EMPNIT='${sucursal}' AND CODDOC='${coddoc}';`
    
    execute.QueryToken(res,qry,token);
     
});





module.exports = router;