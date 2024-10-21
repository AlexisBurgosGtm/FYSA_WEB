const execute = require('./../connection');
const express = require('express');
const router = express.Router();



router.post("/listado_tipos", async(req,res)=>{
   
    const { token } = req.body;


    let qry = ``
    qry = `SELECT TIPODOC, DESCRIPCION, INV 
            FROM CONFIG_TIPODOCUMENTOS`
   

    execute.QueryToken(res,qry,token);
     
});











module.exports = router;

